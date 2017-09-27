/* eslint no-console: "off" */
import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import Prismic from 'prismic-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router-dom';

import App from '../shared/app/App';
import routes from '../shared/routes.js';
import PrismicConfig from '../prismic-configuration';

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../dist')));

// Middleware to inject prismic context
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: PrismicConfig.apiEndpoint,
    linkResolver: PrismicConfig.linkResolver,
  };
  // add PrismicDOM in locals to access them in templates.
  Prismic.api(PrismicConfig.apiEndpoint, {
    accessToken: PrismicConfig.accessToken,
    req,
  }).then((api) => {
    res.locals.ctx.api = api;
    next();
  }).catch((error) => {
    next(error.message);
  });
});

// universal routing and rendering
app.get('*', (req, res, next) => {
  let status = 200;
  const data = {};

  routes(res.locals.ctx).some(route => {
    // use `matchPath` here
    const match = matchPath(req.url, route);
    if (match) {
      const fnFetchData = (route.component.PRISMIC_FETCH_REQUEST && route.component.PRISMIC_FETCH_REQUEST()) || (() => Promise.resolve());

      fnFetchData(res.locals.ctx, /*props*/{match})
      .then((PRISMIC_UNIVERSAL_DATA) => {
        const context = {};
        const markup = renderToString(
          <Router location={req.url} context={context}>
            <App primicCtx={res.locals.ctx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />
          </Router>
        );
      
        // context.url will contain the URL to redirect to if a <Redirect> was used
        if (context.url) {
          return res.redirect(302, context.url);
        }
      
        if (context.is404) {
          status = 404;
        }

        return res.status(status).render('index', { markup, PRISMIC_UNIVERSAL_DATA });
      })
      .catch((e) => next());
    }
    return match;
  });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
    `);
});

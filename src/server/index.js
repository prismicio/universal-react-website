/**
 * This file is the code that will run when loading a page 
 * on the server side.
 * 
 * Here is where you can find all the important files for 
 * this application:
 * 
 * Components: All the components for this application are 
 * located in the src/shared/app folder
 *
 * Prismic Configuration: The configuration for the prismic 
 * repository is found in src/prismic-configuration.js
 * 
 * Router: The router is located in src/shared/router.js 
 * and src/shared/routes.js
 * 
 * Server-side view: The view that this file renders is 
 * found in views/index.ejs
 */

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
app.set('views', path.join(__dirname, '../../../views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../../../public')));

// Middleware to inject prismic context
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: PrismicConfig.apiEndpoint,
    linkResolver: PrismicConfig.linkResolver,
  };
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

// Preconfigured prismic preview
app.get('/preview', (req, res) => {
  const token = req.query.token;
  if (token) {
    res.locals.ctx.api.previewSession(token, PrismicConfig.linkResolver, '/')
    .then((url) => {
      res.redirect(302, url);
    }).catch((err) => {
      res.status(500).send(`Error 500 in preview: ${err.message}`);
    });
  } else {
    res.send(400, 'Missing token from querystring');
  }
});

// universal routing and rendering
app.get('*', (req, res, next) => {
  
  // This project has a static menu, so the menu content is queried here and passed to the render function
  res.locals.ctx.api.getSingle('menu')
  .then(function(menu){
    routes(res.locals.ctx).some(route => {
      // use `matchPath` here
      const match = matchPath(req.url, route);
      if (match) makeAsyncRender(req, res, next, route, match, menu);
      return match;
    });
  });
});

//exec async render for matching route
function makeAsyncRender(req, res, next, route, match, menu) {
  const fetchAsyncData = (route.component.PRISMIC_FETCH_REQUEST && route.component.PRISMIC_FETCH_REQUEST()) || (() => Promise.resolve());
  fetchAsyncData(res.locals.ctx, /*props*/{match})
  .then((data = {}) => {
    const PRISMIC_UNIVERSAL_DATA = {[req.url]: data, menu: menu};
    const context = {};
    const markup = renderToString(
      <Router location={req.url} context={context}>
        <App prismicCtx={res.locals.ctx} PRISMIC_UNIVERSAL_DATA={PRISMIC_UNIVERSAL_DATA} />
      </Router>
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }
    
    const status = context.is404 ? 404 : 200;
    return res.status(status).render('index', { markup, PRISMIC_UNIVERSAL_DATA });
  })
  .catch((e) => next(e.message));
}

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

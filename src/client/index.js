/**
 * This file is the starting point of the application when
 * running on the client side. It builds the prismic context
 * and passes it to the App component via the props.
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
 */

/* global window document */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Prismic from 'prismic-javascript';

import App from '../shared/app/App';
import PrismicConfig from '../prismic-configuration';

const AppClient = (props) => (
  <Router>
    <App {...props} />
  </Router>
);

function buildPrismicContext(callback = () => {}) {
  return Prismic.api(PrismicConfig.apiEndpoint, {
    accessToken: PrismicConfig.accessToken
  }).then((api) => {
    const prismicCtx = {
      endpoint: PrismicConfig.apiEndpoint,
      linkResolver: PrismicConfig.linkResolver,
      api
    };
    return prismicCtx;
  }).catch((error) => {
    next(error.message);
  });
}

window.onload = () => {
  buildPrismicContext()
  .then((prismicCtx) => render(<AppClient prismicCtx={prismicCtx} PRISMIC_UNIVERSAL_DATA={window.__PRISMIC__} />, document.getElementById('main')))
  .catch((e) => `cannot build prismic context : ${e.message}`);
};

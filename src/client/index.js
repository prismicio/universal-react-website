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

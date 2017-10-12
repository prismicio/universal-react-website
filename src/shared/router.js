/**
 * This is the router for the application. You can find 
 * the list of routes in routes.js.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

export default (({prismicCtx, PRISMIC_UNIVERSAL_DATA}) => {
  return (
    <Switch>
      {routes(prismicCtx, PRISMIC_UNIVERSAL_DATA).map((route, index) => {
        const copyRoute = Object.assign({}, route);
        if(copyRoute.render) delete copyRoute.component;
        return <Route key={`route-${index}`} {...copyRoute}/>;
      })}
    </Switch>
  );
});
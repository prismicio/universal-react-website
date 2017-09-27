import React from 'react';

import router from '../router';
import Page from './Page';
import { NotFoundPage } from './NotFoundPage';

export const App = (props) => {
  //could put a wrapper here for layout or anything else
  return router(props)
};

export default App;

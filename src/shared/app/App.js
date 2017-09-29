import React from 'react';

import router from '../router';
import Layout from './Layout';
import Page from './Page';
import { NotFoundPage } from './NotFoundPage';

export const App = (props) => {
  //could put a wrapper here for layout or anything else
  
  return (
    <Layout>
      {router(props)}
    </Layout>
  );
};

export default App;

import React from 'react';
import './styles/global';

import Layout from './components/Layout/index';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

const App = () => (
  <div>
    <Layout>
      <BurgerBuilder />
    </Layout>
  </div>
);

export default App;

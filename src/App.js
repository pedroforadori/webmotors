import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
        <GlobalStyles />
      </Provider>
    </>
  );
}

export default App;

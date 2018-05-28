import React from 'react';
import { render } from 'react-dom';
import { Provider, connect, mapStateToProps, mapDispatchToProps } from 'react-redux';

import getStore from './store';
import App from './App';

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store={getStore()}>
    <ReduxApp />
  </Provider>,
  document.getElementById('app'),
);

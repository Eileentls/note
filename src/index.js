import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';

import Home from './modules/home/pages/home';
//import store from './store';

ReactDOM.render(
  //<Provider store={store}>
  //<Home />
  //</Provider>,
  <Home />,
  document.getElementById('app'),
);

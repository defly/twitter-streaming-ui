import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import './resources/photon-ui/css/photon.global.css';
import 'react-virtualized/styles.css';
import storage from 'electron-json-storage';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
window.storage = storage;

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

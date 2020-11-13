import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import {ConnectedRouter} from 'react-router-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import './index.css';
import { createBrowserHistory } from 'history';
import createStore from './createStore';

const history = createBrowserHistory();

const store = createStore(history);
console.log(store.getState());
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />,
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

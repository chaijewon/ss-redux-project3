import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import MovieApp from './reducers'
import {Provider} from 'react-redux'
import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";
import ReduxThunk from 'redux-thunk'
const logger=createLogger()
const store=createStore(MovieApp,applyMiddleware(logger,ReduxThunk))
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

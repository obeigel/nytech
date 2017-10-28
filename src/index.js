import React from 'react';
import ReactDOM from 'react-dom';

import createRoutes from './createRoutes';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import 'material-components-web/dist/material-components-web.css';

import tags from './reducers/tags';
import companies from './reducers/companies';
import fetching from './reducers/fetching';
import filter from './reducers/filter';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    tags,
    companies,
    fetching,
    filter,
    router: routerReducer
  }),
  applyMiddleware(promise, thunk,middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {createRoutes(store)}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
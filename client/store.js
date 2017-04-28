import {createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
  posts,
  comments
  //same as saying posts: posts and comments: comments
};

//This allows redux dev tools to work in Chrome
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

//Allow reducers to be hot reloaded
if(module.hot) {
  console.log("MOdule is HOT");
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);

  });
}

export default store;

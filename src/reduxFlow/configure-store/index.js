/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reduxFlow/reducers';

export default ({ initialState } = {}) => {
  const enhacer = compose(applyMiddleware(thunk), logger());
  const store = createStore(rootReducer, initialState, enhacer);

  if (module.hot) {
    module.hot.accept('reduxFlow/reducers', () => {
      const nextReducer = require('reduxFlow/reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

const logger = () => (window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x);

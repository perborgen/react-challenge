import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import { default as reducers } from './reducers';

const Config = process.env.WEBPACK_MODE;

const getStore = () => {
  if (Config === 'development') {
    return createStore(
      combineReducers({
        reducers,
      }),
      applyMiddleware(logger),
    );
  } else if (Config === 'production') {
    return createStore(combineReducers({
      reducers,
    }));
  }
};

export default getStore;

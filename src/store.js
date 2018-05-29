import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import presentation from './reducers/presentation';

const Config = process.env.NODE_ENV;

const getStore = () => {
  if (Config === 'development') {
    const store = createStore(
      combineReducers({
        presentation,
      }),
      applyMiddleware(logger),
    );
    return store;
  } else if (Config === 'production') {
    const store = createStore(combineReducers({
      presentation,
    }));
    return store;
  }
};

export default getStore;

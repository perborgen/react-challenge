import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import form from './reducers/form';

const Config = process.env.NODE_ENV;

const getStore = () => {
  if (Config === 'development') {
    const store = createStore(
      combineReducers({
        form,
      }),
      applyMiddleware(logger),
    );
    return store;
  } else if (Config === 'production') {
    const store = createStore(combineReducers({
      form,
    }));
    return store;
  }
};

export default getStore;

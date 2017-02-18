import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import apiMiddleware from './middlewares/api';

const store = createStore(
  reducers,
  applyMiddleware(
    apiMiddleware
  )
);

export default store;
import { combineReducers } from 'redux';

import employees from './employees';
import departments from './departments';

const app = combineReducers({
  departments,
  employees
})

export default app;

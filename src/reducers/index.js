// Core
import { combineReducers } from 'redux';

// Reducers
import list from './list';
import filter from './filter';

// combineReducers
const reducers = combineReducers({
  filter,
  list
});

export default reducers;

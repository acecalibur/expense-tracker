import { combineReducers } from 'redux';
import expenseReducer from './slices/expense.slice.js';
import siftReducer from './slices/sift.slice.js';

const rootReducer = combineReducers({
  expense: expenseReducer,
  sift: siftReducer,
});

export default rootReducer;

import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './slices/expenses.slice';
import siftReducer from './slices/sift.slice';

const rootReducer = {
  expenses: expensesReducer,
  sift: siftReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from './root-saga';
import asyncReducer from './slices/async.slice';
import expensesReducer from './slices/expenses.slice';
import siftReducer from './slices/sift.slice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  async: asyncReducer,
  expenses: expensesReducer,
  sift: siftReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export default store;

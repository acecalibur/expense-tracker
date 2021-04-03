import { all, call, put, takeLatest } from 'redux-saga/effects';
import { createExpenseFs, deleteExpenseFs, fetchExpensesFs, updateExpenseFs } from '../api/firebase';
import { appReady, fetchCompleted, fetchFailed, fetchStarted } from './slices/async.slice';
import * as actions from './slices/expenses.slice';

// Workers

function* handleStartSetExpenses() {
  try {
    yield put(fetchStarted());
    const expenses = yield call(fetchExpensesFs);
    yield put(fetchCompleted());
    yield put(actions.setExpenses(expenses));
    yield put(appReady());
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

function* handleStartCreateExpense(action) {
  try {
    const docRef = yield call(createExpenseFs, action.payload);
    yield put(actions.createExpense({ id: docRef.id, ...action.payload }));
  } catch (error) {
    throw new Error(error);
  }
}

function* handleStartUpdateExpense(action) {
  try {
    yield call(updateExpenseFs, action.payload);
    yield put(actions.updateExpense(action.payload));
  } catch (error) {
    throw new Error(error);
  }
}

function* handleStartDeleteExpense(action) {
  try {
    yield call(deleteExpenseFs, action.payload);
    yield put(actions.deleteExpense(action.payload));
  } catch (error) {
    throw new Error(error);
  }
}

// Watchers

function* watchStartSetExpenses() {
  yield takeLatest(actions.startSetExpenses.type, handleStartSetExpenses);
}

function* watchStartCreateExpense() {
  yield takeLatest(actions.startCreateExpense.type, handleStartCreateExpense);
}

function* watchStartUpdateExpense() {
  yield takeLatest(actions.startUpdateExpense.type, handleStartUpdateExpense);
}

function* watchStartDeleteExpense() {
  yield takeLatest(actions.startDeleteExpense.type, handleStartDeleteExpense);
}

function* rootSaga() {
  yield all([watchStartSetExpenses(), watchStartCreateExpense(), watchStartUpdateExpense(), watchStartDeleteExpense()]);
}

export default rootSaga;

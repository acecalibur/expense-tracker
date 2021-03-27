import produce from 'immer';
import { mockData } from '../../data/mock-expenses.data';

const initialState = {
  expenses: mockData,
};

// Action Types
const CREATE_EXPENSE = 'expense/createExpense';
const UPDATE_EXPENSE = 'expense/updateExpense';
const DELETE_EXPENSE = 'expense/deleteExpense';

// Action Creators
export const expenseActions = {
  createExpense: (expense) => ({
    type: CREATE_EXPENSE,
    payload: expense,
  }),
  updateExpense: (expense) => ({
    type: UPDATE_EXPENSE,
    payload: expense,
  }),
  deleteExpense: (expenseId) => ({
    type: DELETE_EXPENSE,
    payload: expenseId,
  }),
};

// Reducers
const expenseReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case CREATE_EXPENSE: {
      draft.expenses.push(payload);
      break;
    }
    case UPDATE_EXPENSE: {
      const i = draft.expenses.findIndex((expense) => expense.id === payload.id);
      if (i !== -1) draft.expenses[i] = payload;
      break;
    }
    case DELETE_EXPENSE: {
      const i = draft.expenses.findIndex((expense) => expense.id === payload);
      if (i !== -1) draft.expenses.splice(i, 1);
      break;
    }
    default:
      break;
  }
}, initialState);

export default expenseReducer;

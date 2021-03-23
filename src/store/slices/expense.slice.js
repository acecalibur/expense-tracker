import produce from 'immer';
import { mockData } from '../../data/mock-expenses.data';

// Action Types
const ADD_EXPENSE = 'expense/addExpense';
const EDIT_EXPENSE = 'expense/editExpense';
const DELETE_EXPENSE = 'expense/deleteExpense';

// Action Creators
export const expenseActions = {
  addExpense: (expense) => ({
    type: ADD_EXPENSE,
    payload: expense,
  }),
  editExpense: (expense) => ({
    type: EDIT_EXPENSE,
    payload: expense,
  }),
  deleteExpense: (expenseId) => ({
    type: DELETE_EXPENSE,
    payload: expenseId,
  }),
};

// Reducers
const expenseReducer = produce(
  (draft, { type, payload }) => {
    switch (type) {
      case ADD_EXPENSE: {
        draft.expenses.push(payload);
        break;
      }
      case EDIT_EXPENSE: {
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
  },
  {
    expenses: mockData,
  },
);

export default expenseReducer;

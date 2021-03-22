import produce from 'immer';
import { mockData } from '../../data/mock-expenses.data';
// Types

const ADD_EXPENSE = 'expense/addExpense';
const EDIT_EXPENSE = 'expense/editExpense';
const DELETE_EXPENSE = 'expense/deleteExpense';

// Action Creators

// Reducers

const expenseReducer = produce(
  (draft, { type, payload }) => {
    switch (type) {
      case ADD_EXPENSE:
        break;
      case EDIT_EXPENSE:
        break;
      case DELETE_EXPENSE:
        break;
      default:
        break;
    }
  },
  {
    expenses: mockData,
  },
);

export default expenseReducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    createExpense: (state, action) => {
      state.list.push(action.payload);
    },
    updateExpense: (state, action) => {
      const i = state.list.findIndex((expense) => expense.id === action.payload.id);
      if (i !== -1) state.list[i] = action.payload;
    },
    deleteExpense: (state, action) => {
      const i = state.list.findIndex((expense) => expense.id === action.payload);
      if (i !== -1) state.list.splice(i, 1);
    },
  },
});

export const { createExpense, updateExpense, deleteExpense } = expensesSlice.actions;
export const expensesSelector = (state) => state.expenses;
export default expensesSlice.reducer;

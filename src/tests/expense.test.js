import cuid from 'cuid';
import { expenseActions } from '../store/slices/expense.slice';

// Action Creators

test('should generate the create expense action object with provided data', () => {
  const expenseData = {
    id: cuid(),
    description: 'Rent',
    note: "Last month's rent",
    category: 'housing',
    amount: 1250,
    date: 1616967192370,
  };

  const action = expenseActions.createExpense(expenseData);
  expect(action).toEqual({
    type: 'expense/createExpense',
    payload: {
      id: expect.any(String),
      ...expenseData,
    },
  });
});

test('should generate the update expense action object', () => {
  const action = expenseActions.updateExpense({ amount: 1010.25, note: 'Lorem ipsum.' });
  expect(action).toEqual({
    type: 'expense/updateExpense',
    payload: {
      amount: 1010.25,
      note: 'Lorem ipsum.',
    },
  });
});

test('should generate the delete expense action object', () => {
  const action = expenseActions.deleteExpense('abc123');
  expect(action).toEqual({
    type: 'expense/deleteExpense',
    payload: 'abc123',
  });
});

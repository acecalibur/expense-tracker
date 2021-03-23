import { createSelector } from 'reselect';

export const selectExpenses = (state) => state.expense.expenses;
export const selectSift = (state) => state.sift;

export const getVisibleExpenses = createSelector(
  [selectExpenses, selectSift],
  (expenses, { search, sortBy, category, dates }) => {
    return expenses
      .filter((expense) => {
        const searchMatch = new RegExp(search, 'gi').test(expense.description);
        const categoryMatch = category === 'all' || expense.category === category;
        const startDateMatch = dates[0] === null || expense.date >= dates[0];
        const endDateMatch = dates[1] === null || expense.date <= dates[1];
        return searchMatch && categoryMatch && startDateMatch && endDateMatch;
      })
      .sort((a, b) => {
        if (sortBy === 'amount_asc') {
          return a.amount - b.amount;
        } else if (sortBy === 'amount_desc') {
          return b.amount - a.amount;
        } else if (sortBy === 'date_asc') {
          return a.date - b.date;
        } else {
          return b.date - a.date;
        }
      });
  },
);

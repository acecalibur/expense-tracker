import { sub } from 'date-fns';
import { getVisibleExpenses } from '../store/selectors';
import { expenses } from './fixtures/mock-data';

test('should sift through expenses based on the search value', () => {
  const sift = {
    search: 't',
    sortBy: 'date_desc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[1], expenses[0]]);
});

test('should sift through expenses based on sort by date in descending order', () => {
  const sift = {
    search: '',
    sortBy: 'date_desc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('should sift through expenses based on sort by date in ascending order', () => {
  const sift = {
    search: '',
    sortBy: 'date_asc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sift through expenses based on sort by amount in descending order', () => {
  const sift = {
    search: '',
    sortBy: 'amount_desc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[0], expenses[2], expenses[1]]);
});

test('should sift through expenses based on sort by amount in ascending order', () => {
  const sift = {
    search: '',
    sortBy: 'amount_asc',
    category: 'all',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[1], expenses[2], expenses[0]]);
});

test('should sift through expenses based on the category', () => {
  const sift = {
    search: '',
    sortBy: 'date_desc',
    category: 'food',
    dates: [null, null],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[1]]);
});

test('should sift through expenses based on the dates', () => {
  const sift = {
    search: '',
    sortBy: 'date_desc',
    category: 'all',
    dates: [sub(new Date(), { days: 7 }), new Date()],
  };

  const selectedData = getVisibleExpenses.resultFunc(expenses, sift);
  expect(selectedData).toEqual([expenses[0], expenses[2]]);
});

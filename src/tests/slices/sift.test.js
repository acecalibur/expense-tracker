import { siftActions } from '../../store/slices/sift.slice';

// Action Creators

test('should generate the set search action object', () => {
  const searchValue = 'rent';
  const action = siftActions.setSearch(searchValue);
  expect(action).toEqual({
    type: 'sift/setSearch',
    payload: searchValue,
  });
});

test('should generate the sort by date descending action object', () => {
  const action = siftActions.sortByDate('date_desc');
  expect(action).toEqual({
    type: 'sift/sortByDate',
    payload: 'date_desc',
  });
});

test('should generate the sort by date ascending action object', () => {
  const action = siftActions.sortByDate('date_asc');
  expect(action).toEqual({
    type: 'sift/sortByDate',
    payload: 'date_asc',
  });
});

test('should generate the sort by amount descending action object', () => {
  const action = siftActions.sortByAmount('amount_desc');
  expect(action).toEqual({
    type: 'sift/sortByAmount',
    payload: 'amount_desc',
  });
});

test('should generate the sort by amount ascending action object', () => {
  const action = siftActions.sortByAmount('amount_asc');
  expect(action).toEqual({
    type: 'sift/sortByAmount',
    payload: 'amount_asc',
  });
});

test('should generate the set category action object', () => {
  const category = 'food';
  const action = siftActions.setCategory(category);
  expect(action).toEqual({
    type: 'sift/setCategory',
    payload: category,
  });
});

test('should generate the set dates action object', () => {
  const dates = [new Date(), new Date()];
  const action = siftActions.setDates(dates);
  expect(action).toEqual({
    type: 'sift/setDates',
    payload: dates,
  });
});

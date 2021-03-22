import produce from 'immer';

// Types
const SET_SEARCH = 'sift/setSearch';
const SORT_BY_DATE = 'sift/sortByDate';
const SORT_BY_AMOUNT = 'sift/sortByAmount';
const SET_CATEGORY = 'sift/setCategory';
const SET_START_DATE = 'sift/setStartDate';
const SET_END_DATE = 'sift/setEndDate';

// Action Creators

// Reducers
const siftReducer = produce(
  (draft, { type, payload }) => {
    switch (type) {
      case SET_SEARCH:
        break;
      case SORT_BY_DATE:
        break;
      case SORT_BY_AMOUNT:
        break;
      case SET_CATEGORY:
        break;
      case SET_START_DATE:
        break;
      case SET_END_DATE:
        break;
      default:
        break;
    }
  },
  {
    search: '',
    sortBy: 'date_desc',
    category: 'all',
    startDate: null,
    endDate: null,
  },
);

export default siftReducer;

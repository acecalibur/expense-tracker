import produce from 'immer';

// Action Types
const SET_SEARCH = 'sift/setSearch';
const SORT_BY_DATE = 'sift/sortByDate';
const SORT_BY_AMOUNT = 'sift/sortByAmount';
const SET_CATEGORY = 'sift/setCategory';
const SET_START_DATE = 'sift/setStartDate';
const SET_END_DATE = 'sift/setEndDate';

// Action Creators
export const siftActions = {
  setSearch: (text) => ({
    type: SET_SEARCH,
    payload: text,
  }),
  sortByDate: (value) => ({
    type: SORT_BY_DATE,
    payload: value,
  }),
  sortByAmount: (value) => ({
    type: SORT_BY_AMOUNT,
    payload: value,
  }),
  setCategory: (category) => ({
    type: SET_CATEGORY,
    payload: category,
  }),
  setStartDate: (startDate) => ({
    type: SET_START_DATE,
    payload: startDate,
  }),
  setEndDate: (endDate) => ({
    type: SET_END_DATE,
    payload: endDate,
  }),
};

// Reducers
const siftReducer = produce(
  (draft, { type, payload }) => {
    switch (type) {
      case SET_SEARCH: {
        draft.search = payload;
        break;
      }
      case SORT_BY_DATE: {
        draft.sortBy = payload;
        break;
      }
      case SORT_BY_AMOUNT: {
        draft.sortBy = payload;
        break;
      }
      case SET_CATEGORY: {
        draft.category = payload;
        break;
      }
      case SET_START_DATE: {
        draft.startDate = payload;
        break;
      }
      case SET_END_DATE: {
        draft.endDate = payload;
        break;
      }
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

import produce from 'immer';

const initialState = {
  search: '',
  sortBy: 'date_desc',
  category: 'all',
  dates: [null, null],
};

// Action Types
const SET_SEARCH = 'sift/setSearch';
const SORT_BY_DATE = 'sift/sortByDate';
const SORT_BY_AMOUNT = 'sift/sortByAmount';
const SET_CATEGORY = 'sift/setCategory';
const SET_DATES = 'sift/setDates';

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
  setDates: (dates) => ({
    type: SET_DATES,
    payload: dates,
  }),
};

// Reducers
const siftReducer = produce((draft, { type, payload }) => {
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
    case SET_DATES: {
      draft.dates = payload;
      break;
    }
    default:
      break;
  }
}, initialState);

export default siftReducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  initialized: false,
};

const asyncSlice = createSlice({
  name: 'async',
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.loading = true;
    },
    fetchCompleted: (state) => {
      state.loading = false;
    },
    fetchFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    appReady: (state) => {
      state.initialized = true;
    },
  },
});

export const { fetchStarted, fetchCompleted, fetchFailed, appReady } = asyncSlice.actions;
export const asyncSelector = (state) => state.async;
export default asyncSlice.reducer;

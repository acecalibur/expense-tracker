import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.authenticated = true;
      state.currentUser = action.payload;
    },
    signOut: (state) => {
      state.authenticated = false;
      state.currentUser = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;

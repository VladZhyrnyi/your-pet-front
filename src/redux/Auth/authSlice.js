import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [registerUser.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'This email address is already in use';
    },
    [loginUser.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'Wrong email or password';
    },
    [logoutUser.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [logoutUser.fulfilled]: state => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logoutUser.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'Something went wrong';
    },
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;

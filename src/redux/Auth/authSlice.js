import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  addFavorite,
  removeFavorite,
} from './operations';

const initialState = {
  user: { name: null, email: null, favorite: [] },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  errorMessage: '',

  isLoading: false,
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
      state.token = payload.user.token;
      state.isLoggedIn = true;
    },
    [registerUser.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage = 'This email address is already in use.';
    },
    [loginUser.pending](state) {
      state.isLoggedIn = false;
      state.isError = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.user.token;
      state.isLoggedIn = true;
    },
    [loginUser.rejected](state) {
      state.isLoggedIn = false;
      state.isError = true;
      state.errorMessage =
        'Wrong email or password. Make sure that your account is verified.';
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
      state.errorMessage = 'Something went wrong.';
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
    [addFavorite.fulfilled]: (state, { payload }) => {
      state.user.favorite = payload;
      state.error = '';
    },
    [addFavorite.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [removeFavorite.fulfilled]: (state, { payload }) => {
      state.user.favorite = state.user.favorite.filter(
        item => item !== payload
      );
      state.error = '';
    },
    [removeFavorite.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

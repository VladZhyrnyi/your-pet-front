import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  addFavorite,
  removeFavorite,
  getUserData,
  updateUser,
  removePet,
} from './operations';

const initialState = {
  user: { name: null, email: null, favorite: [] },
  pets: [],
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  errorMessage: '',

  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.errorMessage = payload;
  state.isLoading = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoggedIn = false;
        state.isError = false;
      })
      .addCase(registerUser.rejected, state => {
        state.isLoggedIn = false;
        state.isError = true;
        state.errorMessage = 'This email address is already in use.';
      })

      .addCase(loginUser.pending, state => {
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, state => {
        state.isLoggedIn = false;
        state.isError = true;
        state.errorMessage =
          'Wrong email or password. Make sure that your account is verified.';
      })

      .addCase(logoutUser.pending, state => {
        state.isError = false;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = initialState.user;
        state.pets = initialState.pets;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, state => {
        state.isLoggedIn = false;
        state.isError = true;
        state.errorMessage = 'Something went wrong.';
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.user.favorite = payload;
        state.errorMessage = '';
      })
      .addCase(addFavorite.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })

      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        state.user.favorite = state.user.favorite.filter(
          item => item !== payload
        );
        state.errorMessage = '';
      })
      .addCase(removeFavorite.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })

      //----------------------------UserPage-------------------------------

      .addCase(getUserData.pending, handlePending)
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.pets = payload.pets;
        state.errorMessage = false;
        state.isLoading = false;
      })
      .addCase(getUserData.rejected, handleRejected)

      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.errorMessage = false;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, handleRejected)

      .addCase(removePet.pending, handlePending)
      .addCase(removePet.fulfilled, (state, { payload }) => {
        state.pets = state.pets.filter(pet => pet._id !== payload);
        state.errorMessage = false;
        state.isLoading = false;
      })
      .addCase(removePet.rejected, handleRejected);

    //---------------------------------------------------------------------

    // {
    //   [registerUser.pending](state) {
    //     state.isLoggedIn = false;
    //     state.isError = false;
    //   },

    //   [registerUser.rejected](state) {
    //     state.isLoggedIn = false;
    //     state.isError = true;
    //     state.errorMessage = 'This email address is already in use.';
    //   },
    //   [loginUser.pending](state) {
    //     state.isError = false;
    //   },
    //   [loginUser.fulfilled]: (state, { payload }) => {
    //     state.user = payload.user;
    //     state.token = payload.token;
    //     state.isLoggedIn = true;
    //   },
    //   [loginUser.rejected](state) {
    //     state.isLoggedIn = false;
    //     state.isError = true;
    //     state.errorMessage =
    //       'Wrong email or password. Make sure that your account is verified.';
    //   },
    //   [logoutUser.pending](state) {
    //     state.isError = false;
    //   },
    //   [logoutUser.fulfilled]: state => {
    //     state.user = initialState.user;
    //     state.token = null;
    //     state.isLoggedIn = false;
    //   },
    //   [logoutUser.rejected](state) {
    //     state.isLoggedIn = false;
    //     state.isError = true;
    //     state.errorMessage = 'Something went wrong.';
    //   },
    //   [refreshUser.pending]: state => {
    //     state.isRefreshing = true;
    //   },
    //   [refreshUser.fulfilled]: (state, { payload }) => {
    //     state.user = payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    //   },
    //   [refreshUser.rejected]: state => {
    //     state.isRefreshing = false;
    //     state.isLoggedIn = false;
    //   },
    //   [addFavorite.fulfilled]: (state, { payload }) => {
    //     state.user.favorite = payload;
    //     state.error = '';
    //   },
    //   [addFavorite.rejected]: (state, action) => {
    //     state.error = action.payload;
    //   },
    //   [removeFavorite.fulfilled]: (state, { payload }) => {
    //     state.user.favorite = state.user.favorite.filter(
    //       item => item !== payload
    //     );
    //     state.error = '';
    //   },
    //   [removeFavorite.rejected]: (state, action) => {
    //     state.error = action.payload;
    //   },
  },
});

export const authReducer = authSlice.reducer;

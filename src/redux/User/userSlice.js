import { createSlice } from '@reduxjs/toolkit';
import { getUserData, removePet, updateAvatar, updateUser } from './operations';

const initialState = {
  user: {
    _id: null,
    name: '',
    email: '',
    contactEmail: '',
    phone: '',
    birthday: '',
    city: '',
    avatar: '',
    favorite: [],
  },
  pets: [],
  isLoading: false,
  error: false,
};

const handlePending = state => {
  state.user.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserData.pending, handlePending)
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.pets = payload.pets;
        state.error = false;
        state.isLoading = false;
      })
      .addCase(getUserData.rejected, handleRejected)

      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.error = false;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, handleRejected)

      .addCase(removePet.pending, handlePending)
      .addCase(removePet.fulfilled, (state, { payload }) => {
        state.pets = state.pets.filter(pet => pet._id !== payload);
        state.error = false;
        state.isLoading = false;
      })
      .addCase(removePet.rejected, handleRejected)

      .addCase(updateAvatar.pending, handlePending)
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.error = false;
        state.isLoading = false;
      })
      .addCase(updateAvatar.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { AddPet, AddPetOther, getNotices } from './operations';

const contentInitialState = {
  items: [],
  isLoading: false,
  error: null,
  success: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState: contentInitialState,
  extraReducers: builder =>
    builder
      .addCase(AddPet.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(AddPet.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.success = true;
        state.items.push(payload);
      })
      .addCase(AddPet.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(AddPetOther.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(AddPetOther.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.success = true;
        state.items.push(payload);
      })
      .addCase(AddPetOther.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getNotices.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      }),
});

export const contentReducer = contentSlice.reducer;

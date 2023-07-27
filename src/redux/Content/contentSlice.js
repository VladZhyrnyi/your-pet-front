import { createSlice } from '@reduxjs/toolkit';
import { AddPet } from './operations';

const contentInitialState = {
  items: [],
  isLoading: false,
  error: null,
  success: false,
};

// const addPetDone = () => {};

const contentSlice = createSlice({
  name: 'contacts',
  initialState: contentInitialState,
  extraReducers: builder =>
    builder.addCase(AddPet.fulfilled, (state, { payload }) => {
      state.success = true;
    }),
});

export const contentReducer = contentSlice.reducer;

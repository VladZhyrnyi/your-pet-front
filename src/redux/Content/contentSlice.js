import { createSlice } from '@reduxjs/toolkit';

const contentInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'contacts',
  initialState: contentInitialState,
  extraReducers: {},
});

export const contentReducer = contentSlice.reducer;

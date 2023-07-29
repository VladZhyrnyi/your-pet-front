import { createSlice } from '@reduxjs/toolkit';
import { getNotices } from './operations';

const contentInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contentSlice = createSlice({
  name: 'contacts',
  initialState: contentInitialState,
  extraReducers: {
    [getNotices.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getNotices.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getNotices.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.items = payload;
      state.error = null;
    }

  },
});

export const contentReducer = contentSlice.reducer;



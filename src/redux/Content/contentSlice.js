import { createSlice } from '@reduxjs/toolkit';
import {
  AddPet,
  AddPetOther,
  getNotices,
  getNoticesById,
  removeNotice,
} from './operations';

const contentInitialState = {
  items: [],
  totalPages: 0,
  currentNotice: null,
  isLoading: false,
  error: null,
  success: false,
  notSuc: false,
};

const contentSlice = createSlice({
  name: 'content',
  initialState: contentInitialState,
  reducers: {
    resetSuccess: state => {
      state.success = false;
      state.notSuc = false;
    },
  },
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
        state.notSuc = true;
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
        state.notSuc = true;
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
        state.items = payload.notices;
        state.totalPages = payload.totalPages;
        state.error = null;
      })
      .addCase(getNoticesById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNoticesById.fulfilled, (state, { payload }) => {
        state.currentNotice = payload;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(getNoticesById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(removeNotice.fulfilled, (state, {payload}) => {
        const index = state.items.findIndex(item => item._id === payload);
        state.items.splice(index, 1);
        state.error = '';
      })
      .addCase(removeNotice.rejected, (state, action) => {
        state.error = action.payload;
      }),

});

export const { resetSuccess } = contentSlice.actions;
export const contentReducer = contentSlice.reducer;

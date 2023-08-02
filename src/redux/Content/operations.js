import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const AddPet = createAsyncThunk('pets/CreatePet', async info => {
  const formData = new FormData();

  Object.entries(info).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { data } = await axios.post('/pets', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
});

export const AddPetOther = createAsyncThunk('pets/AddPetOther', async info => {
  const formData = new FormData();

  Object.entries(info).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { data } = await axios.post('/notices', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
});

export const getNotices = createAsyncThunk(
  'content/notices',

  async (config, thunkAPI) => {
    try {
      if (config.params.category === 'favorite') {
        const { data } = await axios.get('/notices/favorite', config);
        return data;
      }
      if (config.params.category === 'own') {
        const { data } = await axios.get('/notices/user', config);
        return data;
      }
      const { data } = await axios.get('/notices', config);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getNoticesById = createAsyncThunk(
  'content/noticeById',

  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'content/removeNotice',

  async (id, thunkAPI) => {
    try {
      await axios.delete(`/notices/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const AddPet = createAsyncThunk('pets/CreatePet', async data => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { res } = await axios.post('/pets', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
});

export const AddPetOther = createAsyncThunk('pets/AddPetOther', async data => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { res } = await axios.post('/notices', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
});


export const getNotices = createAsyncThunk(
  'content/notices',

  async (config, thunkAPI) => {
    try {
      if (config.params.category === 'favorite') {
        console.log('favorite');
        const { data } = await axios.get('/notices/favorite');
        console.log('data', data);
        return data;
      }
      if (config.params.category === 'own') {
        console.log('own');
        const { data } = await axios.get('/notices/user');
        console.log('data', data);
        return data;
      }

      const { data } = await axios.get('/notices', config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

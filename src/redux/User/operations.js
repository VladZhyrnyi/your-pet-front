import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-backend-ni98.onrender.com/api';

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/users/pets');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/update',

  async (user, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/update', user);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removePet = createAsyncThunk(
  'pets/removePet',

  async (id, thunkAPI) => {
    try {
      const { message } = await axios.delete(`/pets/${id}`);

      return message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

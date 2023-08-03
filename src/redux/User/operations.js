import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      const formData = new FormData();

      Object.entries(user).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const { data } = await axios.patch('/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(data);
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
      await axios.delete(`/pets/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

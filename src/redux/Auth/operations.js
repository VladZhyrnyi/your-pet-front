import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-backend-ni98.onrender.com/api';

const userToken = {
  set: token =>
    (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  unset: () => (axios.defaults.headers.common.Authorization = ''),
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post('users/register', userdata);

      userToken.set(data.user.token);

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userdata, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', userdata);

      userToken.set(data.user.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('users/logout');

      userToken.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      userToken.set(persistedToken);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

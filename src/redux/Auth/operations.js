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

      userToken.set(data.token);

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

      userToken.set(data.token);

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

export const addFavorite = createAsyncThunk(
  'auth/addFavorite',

  async (id, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/notices/${id}/favorite`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  'auth/removeFavorite',

  async (id, thunkAPI) => {
    try {
      await axios.patch(`notices/favorite/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//-------------------------UserPage----------------------------

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

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-backend-ni98.onrender.com/';


export const getNotices = createAsyncThunk(
  'content/notices',

  async (config, thunkAPI) => {
    try {
      const { data } = await axios.get('api/notices', config);

      console.log('data 🚀  => ', data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// toast.error(
//   `Error - ${error.message}. Something went wrong. Use the service over time.`
// )
// return thunkAPI.rejectWithValue(error.message);

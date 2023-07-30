import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

// toast.error(
//   `Error - ${error.message}. Something went wrong. Use the service over time.`
// )
// return thunkAPI.rejectWithValue(error.message);

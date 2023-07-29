import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const getNotices = createAsyncThunk(
  'content/notices',

  async (config, thunkAPI) => {
    try {
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

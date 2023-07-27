import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export const AddPet = createAsyncThunk('pets/CreatePet', async pet => {
  const { data } = await axios.post('/api/pets', pet);
  return data;
});

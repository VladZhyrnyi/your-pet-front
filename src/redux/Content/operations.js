import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import formFields from '../../components/AddPetForm/AddPetForm';

axios.defaults.baseURL = 'http://localhost:4000';

export const AddPet = createAsyncThunk('pets/CreatePet', async data => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { res } = await axios.post('/api/pets', formData, {
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

  const { res } = await axios.post('/api/notices', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res;
});

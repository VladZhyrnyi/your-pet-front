import axios from 'axios';

axios.defaults.baseURL = 'https://your-pet-backend-ni98.onrender.com/api';

const getNews = async (page, perPage, query) => {
  const {data} = await axios(`/news?query=${query}&page=${page}&perPage=${perPage}`);
  return data;
};

export  default getNews;
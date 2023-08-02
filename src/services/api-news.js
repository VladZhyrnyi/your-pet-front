import axios from 'axios';

const getNews = async (page, perPage, query) => {
  const {data} = await axios(`/news?query=${query}&page=${page}&perPage=${perPage}`);
  return data;
};

export  default getNews;
import { useState, useEffect } from 'react';
import getNews from 'services/api-news';
import NewsList from './NewsList';
import SearchForm from 'components/SearchForm';
import NotFound from 'components/NotFound';
// import Loader from 'components/Loader';
import {Title} from './News.styled';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    
  const perPage = 6;

  useEffect(()=> {
    const fetchNews = async (page, perPage, query) => {
      setIsLoading(true);
      // setError(null);
      try {
        const data = await getNews(page, perPage, query);
        setNewsData(data.news);
        setTotalPages(data.totalPages);
        }
        catch (error) {
          console.log(error);
          setError('Something went wrong.');
          }
        setIsLoading(false);
    };
    fetchNews(page, perPage, query);
  }, [page, perPage, query]);

  const handleSubmit = (query) => {    
    query.toLowerCase().trim();
    setPage(1);
    setQuery(query);    
  };

  const handleChange = (evt, value) => {setPage(value)};

  return (
    <>
      <Title>News</Title>
      <SearchForm onSubmit={handleSubmit} />
      {/* {isLoading && !error && <Loader />} */}
      {error && <p>{error}</p>}
      {!isLoading && newsData.length === 0 && <NotFound />}
      {!isLoading && newsData && <NewsList news={newsData}/>}
    </>
  );
};

export default News;
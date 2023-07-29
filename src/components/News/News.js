import { useState, useEffect } from 'react';
import getNews from 'services/api-news';
import NewsList from './NewsList';
import SearchForm from 'components/SearchForm';
// import Loader from 'components/Loader';
import Pagination from 'components/Pagination';
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
      setError(null);
      try {
        const data = await getNews(page, perPage, query);
        setNewsData(data.news);
        setTotalPages(data.totalPages);
        }
        catch (error) {
          console.log(error);
          setError('Oops! Something went wrong...');
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

  const handleChange = (evt, page) => {setPage(page)};

  return (
    <>
      <Title>News</Title>
      <SearchForm onSubmit={handleSubmit} />
      {/* {isLoading && !error && <Loader />} */}
      {error && <p>{error}</p>}
      {!isLoading && newsData.length === 0 && <h2>Sorry, but we couldn't find any results for your query :(</h2>}
      {!isLoading && newsData && <NewsList news={newsData}/>}
      {newsData && <Pagination totalPages={totalPages} page={page} onChange={handleChange}/>}
    </>
  );
};

export default News;
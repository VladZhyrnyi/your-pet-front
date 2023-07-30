import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { getNotices } from 'redux/Content/operations';

import NoticesCategoriesList from 'components/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import Title from 'components/Title';
import { useEffect, useMemo } from 'react';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  let queryObj = useMemo(() => {
    return {
      params: {
        category: categoryName,
        query: searchParams.get('query'),
      },
    };
  }, [categoryName, searchParams]);

  useEffect(() => {
    dispatch(getNotices(queryObj));
  }, [queryObj, dispatch]);

  console.log('queryObj - ', queryObj);

  const handleSearchSubmit = query => {
    setSearchParams({ query });
  };

  const clearSearchQuery = () => {
    setSearchParams(searchParams.delete('query'));

  };

  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onSubmit={handleSearchSubmit} onClear={clearSearchQuery} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;

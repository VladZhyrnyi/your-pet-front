import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { getNotices } from 'redux/Content/operations';

import NoticesCategoriesList from 'components/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import { useEffect, useMemo } from 'react';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import SearchForm from 'components/SearchForm/SearchForm';
import PageTitle from 'components/PageTitle/PageTitle';

const NoticesPage = () => {
  const dispatch = useDispatch();

  const { categoryName } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn)

  let queryObj = useMemo(() => {
    return {
      params: {
        category: categoryName,
        query: searchParams.get('query'),
      },
    };
  }, [categoryName, searchParams]);

  useEffect(() => {

    if (!isLoggedIn && (categoryName === "favorite" || categoryName === "own")) {
      navigate('/notices/sell')
    }

    dispatch(getNotices(queryObj));
  }, [queryObj, dispatch, isLoggedIn, categoryName, navigate]);

  const handleSearchSubmit = query => {
    setSearchParams({ query });
  };

  const clearSearchQuery = () => {
    setSearchParams(searchParams.delete('query'));
  };

  return (
    <>
      <PageTitle text={'Find your favorite pet'}/>
      <SearchForm onSubmit={handleSearchSubmit} onClear={clearSearchQuery} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList categoryName={categoryName}/>
    </>
  );
};

export default NoticesPage;

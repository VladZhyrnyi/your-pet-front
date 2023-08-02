import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { getNotices } from 'redux/Content/operations';

import NoticesCategoriesList from 'components/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import { useEffect, useMemo, useState } from 'react';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import SearchForm from 'components/SearchForm/SearchForm';
import PageTitle from 'components/PageTitle/PageTitle';
import PaginationComponent from 'components/Pagination/Pagination';
import { selectContacts } from 'redux/Content/selectors';

const NoticesPage = () => {
  const [page, setPage] = useState(1);

  const [currentCategory, setCurrentCategory] = useState('');

  const dispatch = useDispatch();

  const { categoryName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { totalPages } = useSelector(selectContacts);

  const perPage = 12;

  useEffect(() => {
    if (currentCategory !== categoryName) {
      setPage(1);
      setCurrentCategory(categoryName);
    }
  }, [categoryName, currentCategory]);

  const handleChange = (evt, page) => {
    setPage(page);
  };

  let queryObj = useMemo(() => {
    return {
      params: {
        category: categoryName,
        query: searchParams.get('query'),
        page,
        perPage,
      },
    };
  }, [categoryName, page, searchParams]);

  useEffect(() => {
    if (
      !isLoggedIn &&
      (categoryName === 'favorite' || categoryName === 'own')
    ) {
      navigate('/notices/sell');
    }

    dispatch(getNotices(queryObj));
  }, [queryObj, dispatch, isLoggedIn, categoryName, navigate]);

  const handleSearchSubmit = query => {
    setSearchParams({ query });
    setPage(1);
  };

  const clearSearchQuery = () => {
    setSearchParams(searchParams.delete('query'));
  };

  return (
    <>
      <PageTitle text={'Find your favorite pet'} />
      <SearchForm onSubmit={handleSearchSubmit} onClear={clearSearchQuery} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList categoryName={categoryName} />
      <PaginationComponent
        totalPages={totalPages}
        page={page}
        onChange={handleChange}
      />
    </>
  );
};

export default NoticesPage;

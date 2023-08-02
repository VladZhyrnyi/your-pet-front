import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { getNotices } from 'redux/Content/operations';

import { useEffect, useMemo} from 'react';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import SearchForm from 'components/SearchForm/SearchForm';
import PageTitle from 'components/PageTitle/PageTitle';
import PaginationComponent from 'components/Pagination/Pagination';
import { selectContacts } from 'redux/Content/selectors';

const NoticesPage = () => {

  const dispatch = useDispatch();

  const { categoryName } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { totalPages } = useSelector(selectContacts);

  const perPage = 12;

  let queryObj = useMemo(() => {
    return {
      params: {
        category: categoryName,
        query: searchParams.get('query'),
        page: searchParams.get('page'),
        perPage,
      },
    };
  }, [categoryName, searchParams]);

  useEffect(() => {
    dispatch(getNotices(queryObj));
  }, [queryObj, dispatch]);

  const handleChange = (evt, page) => {
    setSearchParams({page})
  };

  if (!isLoggedIn && (categoryName === 'favorite' || categoryName === 'own')) {
    navigate('/notices/sell');
    return;
  }

  const handleSearchSubmit = query => {
    setSearchParams({ query });
  };

  const clearSearchQuery = () => {
    setSearchParams(searchParams.delete('query'));
  };

  return (
    <>
      <PageTitle text={'Find your favorite pet'} />
      <SearchForm onSubmit={handleSearchSubmit} onClear={clearSearchQuery} />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <PaginationComponent
        totalPages={totalPages}
        page={+(searchParams.get('page')) || 1}
        onChange={handleChange}
      />
    </>
  );
};

export default NoticesPage;

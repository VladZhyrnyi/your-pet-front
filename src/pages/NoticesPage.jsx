import { useParams, useSearchParams } from 'react-router-dom';
// import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
// import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { useDispatch } from 'react-redux';
// import { getNotices } from 'redux/Content/operations';
import Filter from 'components/Filter/Filter';
import AddPetBtn from 'components/AddPetBtn/AddPetBtn';

const NoticesPage = () => {
  // const width = useWindowWidth();
  // const isMobile = width < 768;
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();

  const handleSearchSubmit = () => {
    const queryObj = {
      params: {
        category: categoryName,
        query: searchParams.get('query'),
      },
    };
    console.log(queryObj);

    // dispatch(getNotices(queryObj));
  };

  return (
    <>
      <NoticesSearch onSubmit={handleSearchSubmit} />
      <div>
        <NoticesCategoriesNav />
        <div>
          <Filter />
          <AddPetBtn />
        </div>
      </div>
      {/* <NoticesCategoriesList /> */}
      {/* <NoticeDetail /> */}
    </>
  );
};

export default NoticesPage;

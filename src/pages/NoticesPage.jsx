import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

const NoticesPage = props => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticeDetail/>
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;

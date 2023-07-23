import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

const NoticesPage = props => {
  return (
    <>
      {/* <div>NoticesPage</div> */}
      <NoticesSearch />
      <NoticesCategoriesNav/>
    </>
  );
};

export default NoticesPage;

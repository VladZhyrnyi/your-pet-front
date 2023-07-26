import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import Title from 'components/Title';

const SharedLayout = () => {
  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
    </>
  );
};

export default SharedLayout;

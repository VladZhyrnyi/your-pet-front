import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import Title from 'components/Title';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
    </>
  );
};

export default SharedLayout;

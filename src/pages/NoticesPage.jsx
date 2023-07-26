import NoticeDetail from 'components/NoticeDatail/NoticeDetail';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import SharedLayout from 'components/SharedLayout';
import { Suspense } from 'react';

import { Outlet } from 'react-router';

const NoticesPage = props => {
  return (
    <>
      <SharedLayout>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </SharedLayout>
      <NoticesCategoriesNav />
      <NoticeDetail />
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;

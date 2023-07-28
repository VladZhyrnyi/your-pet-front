import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
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
      <NoticesCategoriesList />
    </>
  );
};

export default NoticesPage;

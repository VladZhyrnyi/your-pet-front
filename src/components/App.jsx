import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { refreshUser } from 'redux/Auth/operations';
import { selectIsRefreshing } from 'redux/Auth/selectors';

import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import NoticesPage from '../pages/NoticesPage';
import UserPage from '../pages/UserPage';
import AddPetPage from '../pages/AddPetPage';
import OurFriendsPage from '../pages/OurFriendsPage';
import NewsPage from '../pages/NewsPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from './Layout';

import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <>Refreshing...</>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/notices/sell"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/user"
              component={<LoginPage />}
            />
          }
        />
        <Route path="/notices" element={<Navigate to="/notices/sell" />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route
          path="/user"
          element={
            <PrivateRoute redirectTo="/login" component={<UserPage />} />
          }
        />
        <Route
          path="/add-pet"
          element={
            <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
          }
        />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

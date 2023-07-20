// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { refreshUser } from 'redux/Auth/operations';
// import { selectIsRefreshing } from 'redux/Auth/selectors';

import { Routes, Route } from 'react-router-dom';

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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

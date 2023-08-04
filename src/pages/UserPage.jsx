import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from 'redux/Auth/operations';

import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { UserPageWrap } from 'components/UserData/UserData.styled';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <UserPageWrap>
      <UserData />
      <PetsData />
    </UserPageWrap>
  );
};

export default UserPage;

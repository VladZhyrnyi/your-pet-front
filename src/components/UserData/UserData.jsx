import React, { useState } from 'react';
import UserForm from './UserForm/UserForm';
import { UserDataWrap, Title, Wrap } from './UserData.styled';

const UserData = () => {
  const [isChanging, setIsChanging] = useState(false);

  const hendleChangingStatus = value => {
    if (value === 'Save' || value === 'Close') {
      setIsChanging(false);
    } else {
      setIsChanging(true);
    }
  };

  return (
    <UserDataWrap>
      <Title>My information:</Title>
      <Wrap>
        {isChanging ? (
          <UserForm changeStatus={hendleChangingStatus} />
        ) : (
          <UserForm changeStatus={hendleChangingStatus} permis />
        )}
      </Wrap>
    </UserDataWrap>
  );
};

export default UserData;

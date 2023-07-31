import React, { useState } from 'react';
import UserForm from './UserForm/UserForm';
import { Title, Wrap } from './UserData.styled';
import Logout from './Logout';

const UserData = () => {
  const [isChanging, setIsChanging] = useState(false);

  const hendleChangingStatus = value => {
    if (value === 'Save') {
      setIsChanging(false);
    } else {
      setIsChanging(true);
    }
  };

  return (
    <div>
      <Title>My information:</Title>
      <Wrap>
        {isChanging ? (
          <UserForm changeStatus={hendleChangingStatus} />
        ) : (
          <UserForm changeStatus={hendleChangingStatus} permis />
        )}
        {!isChanging && <Logout />}
      </Wrap>
    </div>
  );
};

export default UserData;

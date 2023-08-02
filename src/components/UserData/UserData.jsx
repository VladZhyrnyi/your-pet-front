import React, { useState } from 'react';
import UserForm from './UserForm/UserForm';
import { Title, Wrap } from './UserData.styled';

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
    <div>
      <Title>My information:</Title>
      <Wrap>
        {isChanging ? (
          <UserForm changeStatus={hendleChangingStatus} />
        ) : (
          <UserForm changeStatus={hendleChangingStatus} permis />
        )}
      </Wrap>
    </div>
  );
};

export default UserData;

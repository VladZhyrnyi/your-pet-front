import React from 'react';
import { LogOutBtn } from './Logout.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

const Logout = () => {
  return (
    <LogOutBtn type="button">
      <SpriteIcon icon="logout" color="#54ADFF" size="24px" fill />
      Logout
    </LogOutBtn>
  );
};
export default Logout;

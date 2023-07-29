import React from 'react';

import { Link } from 'react-router-dom';

import { theme } from 'theme';
import { styled } from 'styled-components';

import SpriteIcon from 'components/SpriteIcon';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';

// ================styled================

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const Typography = styled.p`
  /* display: none; */
  font-family: Manrope500, sans-serif;
  font-size: 16px;

  color: ${p => p.theme.colors.yellow};

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
// ===============================================

function UserBar({ name = true }) {
  const user = useSelector(selectUser);

  return (
    <>
      <UserContainer as={Link} to="/user">
        <SpriteIcon icon="user" color={theme.colors.yellow} />
        {name && <Typography>Anna{user.name}</Typography>}
      </UserContainer>
    </>
  );
}

export default UserBar;

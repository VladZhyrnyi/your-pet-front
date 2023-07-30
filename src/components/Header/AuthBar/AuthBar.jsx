import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';

import AuthNavigation from '../AuthNavigation';
import UserBar from '../UserBar';

import { styled } from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function AuthBar({ name = true }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AuthContainer>
      {isLoggedIn ? <UserBar name={name} /> : <AuthNavigation />}
    </AuthContainer>
  );
}

export default AuthBar;

import React from 'react';
import { useSelector } from 'react-redux';

import { styled } from 'styled-components';

import { selectIsLoggedIn } from 'redux/Auth/selectors';

import AuthNavigation from './AuthNavigation';
import UserBar from './UserBar';

// ==============styled================

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function AuthBar({key, name}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
console.log('name', name)
  return (
    <AuthContainer>
      {isLoggedIn ? <UserBar key={key} name={name}/> : <AuthNavigation />}
    </AuthContainer>
  );
}

export default AuthBar;

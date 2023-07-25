import React from 'react';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme';
import { AuthContainer, ButtonLogin, ButtonRegister } from './AuthNav.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <NavLink to="/login" exact="true">
        <ButtonLogin >
          Log IN
          <SpriteIcon icon="pawprint" color={theme.colors.yellow} />
        </ButtonLogin>
      </NavLink>
      <NavLink to="/register" exact="true">
        <ButtonRegister
          // border-color= {theme.colors.yellow}
          //  color= {theme.colors.yellow}
          // background-color= {theme.colors.white}
          width="165px"
        >
          {' '}
          Registration
        </ButtonRegister>
      </NavLink>
    </AuthContainer>
  );
};

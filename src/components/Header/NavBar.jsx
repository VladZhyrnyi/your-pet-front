import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const NavBarLink = styled(NavLink)`
  font-family: Manrope500;
  font-size: 32px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  &.active {
    font-family: Manrope700;
    color: ${p => p.theme.colors.yellow};
  }
`;

function NavBar() {
  return (
    <Nav>
      <NavBarLink to="/news">News</NavBarLink>
      <NavBarLink to="/notices">Find Pet</NavBarLink>
      <NavBarLink to="/friends">Friends</NavBarLink>
    </Nav>
  );
}

export default NavBar;

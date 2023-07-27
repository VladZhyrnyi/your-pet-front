import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 160px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    // margin-left: 96px;
    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-left: 160px;
    gap: 40px;
  }
`;

const NavbarLink = styled(NavLink)`
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

const NavBar = () => {
  return (
    <Nav>
      <NavbarLink to="/news">News</NavbarLink>
      <NavbarLink to="/notices">Find Pet</NavbarLink>
      <NavbarLink to="/friends">Friends</NavbarLink>
    </Nav>
  );
}

export default NavBar;

import { NavLink } from 'react-router-dom';

import { Nav, NavBarLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <NavBarLink as={NavLink} to="/news">
        News
      </NavBarLink>
      <NavBarLink as={NavLink} to="/notices">
        Find Pet
      </NavBarLink>
      <NavBarLink as={NavLink} to="/friends">
        Our friends
      </NavBarLink>
    </Nav>
  );
}

export default NavBar;

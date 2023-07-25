import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav';
import { NavContainer } from './Nav.styled';

import { UserNav } from './UserNav';
import { selectIsLoggedIn } from 'redux/Auth/selectors';


export const Nav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      {isLoggedIn ? <UserNav /> :  <AuthNav />}
    </NavContainer>
  );
};
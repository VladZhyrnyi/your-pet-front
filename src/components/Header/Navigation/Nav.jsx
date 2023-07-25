// import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav';
import { NavContainer } from './Nav.styled';

import { UserNav } from './UserNav';
//  import authSelectors from 'store/auth/auth-selectors';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     // borderBottom: '1px solid #fff',
//   },
// };

export const Nav = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <NavContainer>
      
      {/* <UserNav />   */}
        <AuthNav />
      {/* {isLoggedIn ? <UserNav /> :  <AuthNav />} */}
    </NavContainer>
  );
};
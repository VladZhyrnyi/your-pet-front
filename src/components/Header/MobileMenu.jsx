// import { useSelector } from 'react-redux';

import useWindowWidth from '../../hooks/useWindowWidth';
import AuthBar from './AuthBar';
// import UserBar from './UserBar';
import NavBar from './NavBar';

import { styled } from 'styled-components';
// import LogoutBtn from './LogoutBtn';
import { createPortal } from 'react-dom';
// import MenuBtn from './MenuBtn';

//  import { selectIsLoggedIn } from 'redux/Auth/selectors';

const MobilContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  
  top: 64px;
  padding-top:16px;
  background-color: ${p=>p.theme.colors.backgroundColor};
  bottom: 0;
 
  gap: 40px;

  @media screen and (min-width: 768px) {
    top: 92px;
  }

`;

const mobileMenu = document.getElementById('mobile-menu');

function MobileMenu() {
  //  const isLoggedIn = useSelector(selectIsLoggedIn);
  const width = useWindowWidth();
  const isMobile = width < 768;
  

  return createPortal(
    <MobilContainer>
      {isMobile && <AuthBar key='mobile-menu'/> }

      {/* {isLoggedIn ?  */}
      {/* <AuthBar /> */}

      {/* <UserContainer
        <UserBar />
      </UserContainer> */}
      {/* } */}
      <NavBar />

      {/* <LogoutContainer>
        <LogoutBtn />
      </LogoutContainer> */}
    </MobilContainer>,
    mobileMenu
  );
}

export default MobileMenu;

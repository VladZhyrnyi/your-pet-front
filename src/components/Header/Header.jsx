import { useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navbar from './NavBar';
import AuthBar from './AuthBar';
import MobileMenu from './MobileMenu';
import MenuBtn from './MenuBtn';
import useWindowWidth from 'hooks/useWindowWidth';
import UserBar from './UserBar';
// import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 20px 0;
  @media screen and (min-width: 768px) {
    height: 80px;
    padding: 24px 0;
  }
  @media screen and (min-width: 1280px) {
  }
`;
const Container = styled.div`
  display: flex;
  /* align-items: baseline; */
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    gap: 22px;
  }
  @media screen and (min-width: 1280px) {
    width: 927px;
    justify-content: space-between;
  }
`;

export const Header = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1280;
  const isTablet = windowWidth >= 768;
  const isMobile = windowWidth < 768;

  return (
    <HeaderContainer>
      <Logo />

   
      <Container>
      {isDesktop && (
        <>
          <Navbar />
        </>
      )}
        {isDesktop && (
          <>
            {((isMobile && !isOpenMenu) || !isMobile) && (
              <AuthBar name={!isMobile} />
            )}
          </>
        )}
        {isTablet && !isDesktop && (
          <>
            {((isMobile && !isOpenMenu) || !isMobile) && (
              <AuthBar name={!isMobile} />
            )}
          </>
        )}

        {isLoggedIn && !isTablet && !isDesktop && (
          <>
            {((isMobile && !isOpenMenu) || !isMobile) && (
              <UserBar name={!isMobile} />
            )}
          </>
        )}
        {!isDesktop && (
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        )}
      </Container>

      {isOpenMenu && !isDesktop && <MobileMenu />}
    </HeaderContainer>
  );
};

export default Header;

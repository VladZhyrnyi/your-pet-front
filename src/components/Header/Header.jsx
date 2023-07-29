import { useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navbar from './NavBar';
import AuthBar from './AuthBar';
import MobileMenu from './MobileMenu';
import MenuBtn from './MenuBtn';
import useWindowWidth from 'hooks/useWindowWidth';
// import LogoutBtn from './LogoutBtn';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/Auth/selectors';

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
  align-items: baseline;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 22px;
  }
`;

export const Header = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1280;
  const isMobile = windowWidth < 768;

  return (
    <HeaderContainer>
      <Logo />

      {/* {!isDesktop && isLoggedIn && <UserBar />} */}
      {isDesktop && (
        <>
          <Navbar />
        </>
      )}
      <Container>
        {((isMobile && !isOpenMenu) || !isMobile) && <AuthBar name={!isMobile} />}
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

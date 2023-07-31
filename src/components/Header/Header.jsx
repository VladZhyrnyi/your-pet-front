import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import useWindowWidth from 'hooks/useWindowWidth';

import Logo from './Logo';
import Navbar from './NavBar';
import AuthBar from './AuthBar';
import MobileMenu from './MobileMenu';
import MenuBtn from './MenuBtn';
import LogoutBtn from './LogoutBtn';

import { HeaderContainer, Container } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location]);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1280;
  const isTablet = windowWidth >= 768 && windowWidth < 1280;
  const isMobile = windowWidth < 768;

  return (
    <HeaderContainer>
      <Logo />

      {isMobile && (
        <Container>
          {isLoggedIn && !isOpenMenu && <AuthBar name={false} />}
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </Container>
      )}

      {isTablet && (
        <Container>
          {isOpenMenu ? isLoggedIn ? <LogoutBtn /> : <AuthBar /> : <AuthBar />}
          <MenuBtn
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </Container>
      )}

      {isDesktop && (
        <>
          <Navbar />
          {!isLoggedIn ? (
            <AuthBar />
          ) : (
            <Container>
              <LogoutBtn />
              <AuthBar />
            </Container>
          )}
        </>
      )}

      {isOpenMenu && !isDesktop && <MobileMenu />}
    </HeaderContainer>
  );
};

export default Header;

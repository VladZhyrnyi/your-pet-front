import { useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navbar from './Navbar';
import AuthBar from './AuthBar';
import MobileMenu from './MobileMenu';
import MenuBtn from './MenuBtn';
import useWindowWidth from 'hooks/useWindowWidth';

export const HeaderContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const windowWidth = useWindowWidth();

  const isDesktop = windowWidth >= 1280;
  const isMobile = windowWidth < 768;

  return (
    <HeaderContainer>
      <Logo />
      {isDesktop && <Navbar />}
      {!isMobile && <AuthBar />}
      {!isDesktop && (
        <MenuBtn
          isOpen={isOpenMenu}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
      )}
      {isOpenMenu && !isDesktop && <MobileMenu />}
    </HeaderContainer>
  );
};

export default Header;

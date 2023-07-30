import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/Auth/selectors';

import useWindowWidth from '../../hooks/useWindowWidth';

import NavBar from './NavBar';
import AuthBar from './AuthBar';
import LogoutBtn from './LogoutBtn';

import { styled } from 'styled-components';


const MobileContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;

  top: 64px;
  padding-top: 16px;
  background-color: ${p => p.theme.colors.backgroundColor};
  bottom: 0;

  gap: 40px;

  @media screen and (min-width: 768px) {
    top: 92px;
  }
`;

const mobileMenu = document.getElementById('mobile-menu');

const MobileMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return createPortal(
    <MobileContainer>
      {isMobile && <AuthBar userBarKey="mobile-menu" />}
      <NavBar />
      {isMobile && isLoggedIn && <LogoutBtn />}
    </MobileContainer>,
    mobileMenu
  );
};

export default MobileMenu;

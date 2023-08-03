import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const ContainerNav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 43px;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;

  width: 205px;

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
    width: 319px;
  }

  @media (min-width: 1280px) {
    width: 319px;
    width: auto;
  }
`;

export const NoticesLink = styled(NavLink)`
  border: none;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.blueLight};

  color: ${p => p.theme.colors.blue};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;

  transition: transform ${p => p.theme.transitionTimingFunction};

  &:hover {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }

  &.active {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
`;

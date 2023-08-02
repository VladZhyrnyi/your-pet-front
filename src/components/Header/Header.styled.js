import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    height: 64px;
    margin-top: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    gap: 22px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: center;
  }
`;

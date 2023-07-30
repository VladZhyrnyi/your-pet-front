import { styled } from "styled-components";

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

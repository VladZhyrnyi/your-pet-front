import { styled } from 'styled-components';
export const LogoutModalContentWrapper = styled.div`
  width: 100%;
  height: 302px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;
  @media (min-width: 768px) {
    gap: 48px;
  }
`;

export const LogoutModalTitle = styled.p`
  font-family: Manrope500;
  font-size: 24px;
  letter-spacing: 0.04em;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const LogoutModalBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    width: 275px;
    flex-direction: row;
    gap: 17px;
  }
`;

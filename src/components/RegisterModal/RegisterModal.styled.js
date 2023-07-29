import { styled } from 'styled-components';

export const RegisterModalContentWrapper = styled.div`
  //   width: 100%;
  //   height: 302px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
  gap: 44px;
  @media (min-width: 768px) {
    gap: 48px;
  }
`;

export const RegisterModalTitle = styled.p`
  font-family: Manrope500;
  font-size: 24px;
  //   letter-spacing: 0.04em;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const RegisterModalText = styled.p`
  font-family: Manrope400;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

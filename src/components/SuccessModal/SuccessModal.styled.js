import { styled } from 'styled-components';

export const SuccessModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SuccessModalTitle = styled.p`
  font-family: Manrope500;
  font-size: 24px;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 52px;
  }
`;

export const SuccessModalText = styled.p`
  font-family: Manrope400;
  font-size: 16px;
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

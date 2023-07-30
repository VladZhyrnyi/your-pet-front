import { styled } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 60px 20px;

  @media (min-width: 768px) {
    align-items: center;
    gap: 40px;

    margin: 60px 40px;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.black};
  text-align: center;
  font-family: Manrope500;
  font-size: 24px;
  letter-spacing: 0.96px;

  @media (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const Message = styled.p`
  width: 240px;

  color: ${p => p.theme.colors.black};
  text-align: center;
  font-family: Manrope500;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: 0.56px;

  @media (min-width: 768px) {
    width: 528px;

    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

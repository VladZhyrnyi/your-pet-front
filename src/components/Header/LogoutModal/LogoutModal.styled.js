import { styled } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const TextWrapper = styled.p`
  font-family: Manrope500;
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

const ControlButton = styled.button`
  width: 256px;
  height: 40px;
  padding: 8px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8;

  font-family: Manrope700;
  font-size: 16px;

  border: solid 2px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 130px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const CancelBtn = styled(ControlButton)`
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.backgroundColor};
  border-color: ${p => p.theme.colors.blue};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.linearGradient};
    border: none;
  }
`;

export const AproveBtn = styled(ControlButton)`
  color: ${p => p.theme.colors.backgroundColor};
  background-color: ${p => p.theme.colors.blue};
  border: none;

  &:hover,
  &:focus {
    background: ${p => p.theme.linearGradient};
  }
`;

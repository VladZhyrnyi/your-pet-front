import { FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  margin: 60px 12px;

  @media (min-width: 768px) {
    width: 392px;
    align-items: center;

    margin: 60px 105px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 14px;

  color: ${p => p.theme.colors.black};
  font-family: Manrope700;
  font-size: 24px;
  letter-spacing: 0.96px;

  @media (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;

export const Div = styled.div`
  margin-bottom: 44px;
  padding: 0 8px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
    padding: 0;
  }
`;

export const Message = styled.p`
  text-align: center;

  color: ${p => p.theme.colors.black};
  font-family: Manrope500;
  font-size: 14px;
  letter-spacing: -0.14px;

  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.16px;
  }
`;
export const Span = styled.span`
  color: ${p => p.theme.colors.black};
  text-align: center;
  font-family: Manrope700;
  font-size: 14px;
  letter-spacing: -0.14px;

  @media (min-width: 768px) {
    font-size: 16px;

    letter-spacing: -0.16px;
  }
`;

export const ButtonDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
  @media (min-width: 1280px) {
    gap: 17px;
  }
`;

export const ButtonCancel = styled.button`
  display: flex;

  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  border: 2px solid ${p => p.theme.colors.blue};
  padding: 8px 20px;
  outline: none;

  border-radius: 40px;
  background-color: ${p => p.theme.colors.white};

  color: ${p => p.theme.colors.blue};
  font-family: Manrope700, sans-serif;
  font-size: 16px;
  letter-spacing: 0.64px;

  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover {
    background-image: ${p => p.theme.linearGradient};
    background-origin: border-box;
    background-repeat: no-repeat;
    color: ${p => p.theme.colors.white};
    border: 2px solid transparent;
  }

  @media (min-width: 768px) {
    min-width: 129px;
  }
`;
export const ButtonYes = styled(ButtonCancel)`
  background-image: ${p => p.theme.linearGradient};
  background-origin: border-box;
  background-repeat: no-repeat;
  color: ${p => p.theme.colors.white};
  border: 2px solid transparent;

  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover {
    background-image: none;
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
    border: 2px solid ${p => p.theme.colors.blue};
  }

  &:hover svg {
    color: ${p => p.theme.colors.blue};
  }
`;

export const IconTrash = styled(FiTrash2)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};

  transition: color ${p => p.theme.transitionTimingFunction};
`;

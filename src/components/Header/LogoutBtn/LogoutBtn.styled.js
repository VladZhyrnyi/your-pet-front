import { styled } from 'styled-components';

export const ButtonLogout = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;

  width: 135px;
  height: 40px;
  padding: 8px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: Manrope700, sans-serif;
  font-size: 16px;

  border-radius: 20px;
  border: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  @media screen and (min-width: 768px) {
    position: static;
  }

  &:hover,
  &:focus {
    background: ${p => p.theme.linearGradient};
    border: none;
  }
`;



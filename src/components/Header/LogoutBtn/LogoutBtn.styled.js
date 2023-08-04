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
  border: transparent;
  outline: none;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  transition: transform ${p => p.theme.transitionTimingFunction};
  
  @media screen and (min-width: 768px) {
    position: static;
  }

  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
    background-origin: border-box;
    background-repeat: no-repeat;
    border: transparent;
    transform: scale(1.1);
  }
`;

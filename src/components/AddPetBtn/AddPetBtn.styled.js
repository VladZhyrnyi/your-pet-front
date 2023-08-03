import { styled } from 'styled-components';

export const AddPetButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border: 1px solid transparent;
  border-radius: 40px;
  border: 2px solid transparent;
  cursor: pointer;

  background-image: ${p => p.theme.linearGradient};
  background-origin: border-box;
  background-repeat: no-repeat;
  color: ${p => p.theme.colors.white};
  font-family: Manrope600;
  font-size: 12px;

  &:hover {
    background-image: none;
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.blue};
    border: 2px solid ${p => p.theme.colors.blue};
  }

  &:hover svg {
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    position: static;
    height: 40px;
    width: 130px;

    flex-direction: row;
    gap: 8px;

    font-family: Manrope700;
    font-size: 16px;
    letter-spacing: 0.64px;
  }

  @media screen and (min-width: 1280px) {
    width: 152px;
  }
`;

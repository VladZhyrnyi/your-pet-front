import { styled } from 'styled-components';

export const AddPetButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;

  border: 1px solid transparent;
  border-radius: 40px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  font-family: Manrope600;
  font-size: 12px;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 4px;

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

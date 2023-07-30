import { styled } from 'styled-components';

export const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-family: Manrope700, sans-serif;
  font-size: 16px;
  border: 2px solid ${p => p.theme.colors.yellow};
  color: ${p => p.theme.colors.yellow};
  background-color: ${p => p.theme.colors.white};
  padding: 8px 20px;
  gap: 8px;
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  border: 2px solid ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.yellow};
`;

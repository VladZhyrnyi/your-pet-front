import styled from 'styled-components';

export const TitleNotice = styled.h1`
  text-align: center;
  padding-top: 40px;

  color: ${p => p.theme.colors.black};
  font-family: Manrope700, sans-serif;
  font-size: 24px;

  @media (min-width: 768px) {
    padding-top: 80px;
    font-size: 48px;
  }
`;

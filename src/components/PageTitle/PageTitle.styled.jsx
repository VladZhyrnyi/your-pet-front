import styled from 'styled-components';

export const Title = styled.h1`
  margin: 20px 0 24px;
  text-align: center;
  font-family: Manrope700;
  font-size: 24px;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    margin: 56px 0 40px;
    font-size: 48px;
  }
`;

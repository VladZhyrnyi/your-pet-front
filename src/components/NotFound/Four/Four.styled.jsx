import styled from 'styled-components';

export const FourEl = styled.p`
  color: ${p => p.theme.colors.blue};
  font-family: Manrope800;
  font-size: 130px;
  line-height: 130%;
  transform: ${props => props.transform};

  @media screen and (min-width: 768px) {
    font-size: 326px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 381px;
  }
`;

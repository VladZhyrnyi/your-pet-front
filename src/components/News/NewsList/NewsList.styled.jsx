import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 36px;
  margin: 0 auto;
  
  font-family: Manrope400, sans-serif;
  font-size: 16px;
  line-height: normal;
  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    flex-direction: row;      
    gap: 32px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    column-gap: 31px;
  }    
`;
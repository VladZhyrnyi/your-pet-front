import styled from 'styled-components';

export const Title = styled.h1`
  margin: 40px 0 24px;
  text-align: center;
  font-family: Manrope700;
  font-size: 24px;  
  color: ${p => p.theme.colors.black};

  @media (min-width: 768px) {
    margin: 80px 0 40px;
    font-size: 48px;       
  }
`
// export const Btn = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 40px auto;

// `;
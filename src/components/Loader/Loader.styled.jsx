import styled, { keyframes } from 'styled-components';

const bounce1 = keyframes`
  0% {opacity: 0;}
  17% {opacity: 1;}
  33% {opacity: 0;}
  50% {opacity: 0;}
  67% {opacity: 0;}
  83% {opacity: 0;}
  100% {opacity: 0;
`
const bounce2 = keyframes`
  0% {opacity: 0;}
  17% {opacity: 0;}
  33% {opacity: 1;}
  50% {opacity: 0;}
  67% {opacity: 0;}
  83% {opacity: 0;}
  100% {opacity: 0;
`
const bounce3 = keyframes`
  0% {opacity: 0;}
  17% {opacity: 0;}
  33% {opacity: 0;}
  50% {opacity: 1;}
  67% {opacity: 0;}
  83% {opacity: 0;}
  100% {opacity: 0;
`
const bounce4 = keyframes`
  0% {opacity: 0;}
  17% {opacity: 0;}
  33% {opacity: 0;}
  50% {opacity: 0;}
  67% {opacity: 1;}
  83% {opacity: 0;}
  100% {opacity: 0;
`
const bounce5 = keyframes`
  0% {opacity: 0;}
  17% {opacity: 0;}
  33% {opacity: 0;}
  50% {opacity: 0;}
  67% {opacity: 0;}
  83% {opacity: 1;}
  100% {opacity: 0;
`
const bounce6 = keyframes`
  0% {opacity: 0;}
  17% {opacity: 0;}
  33% {opacity: 0;}
  50% {opacity: 0;}
  67% {opacity: 0;}
  83% {opacity: 0;}
  100% {opacity: 1;
`
export const LoaderThumb = styled.div`
  position: relative;
  margin: 0 auto;
  width: 280px; 
  height: 120px;
  @media screen and (min-width: 768px) {
    width: 360px;
    height: 140px;
    margin: 0 auto;
  }
`;
export const Wrapper1 = styled.div`
  display: flex;
  justify-content: start;
  gap: 40px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    gap: 50px;
    margin: 0 auto 20px;
  }  
` 
export const Wrapper2 = styled(Wrapper1)`
  position: absolute;
  left: 48px;
  @media screen and (min-width: 768px) {
    left: 60px;
  } 
`
export const Paw1 = styled.div`
  width: 48px;
  height: 48px;
  background-color: transperet;
  display: inline-block;
  rotate: 45deg;
  color: ${p => p.theme.colors.blue};
  animation: ${bounce1} 3s linear infinite;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  } 
`  
export const Paw2 = styled(Paw1)`
  animation: ${bounce3} 3s linear infinite;  
` 
export const Paw3 = styled(Paw1)`
  animation: ${bounce5} 3s linear infinite;
`
export const Paw4 = styled(Paw1)`
  rotate: 90deg;
  color: ${p => p.theme.colors.yellow};
  animation: ${bounce2} 3s linear infinite;
`  
export const Paw5 = styled(Paw4)`
animation: ${bounce4} 3s linear infinite;
` 
export const Paw6 = styled(Paw4)`
animation: ${bounce6} 3s linear infinite;
`

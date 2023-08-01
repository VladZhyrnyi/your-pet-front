import styled from 'styled-components';

 const Button = styled.button`
  position: fixed;
  bottom: 8px;
  right: 20px;
  width: 48px;
  height: 48px;
  padding-top: 3px;
  rotate: 90deg;

  border-radius: 50%;
  border: none;
  outline: none;  
  
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: ${p => p.theme.boxShadow.first};   
  cursor: pointer;  
  transition: background-image ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
  }
`

export default Button;
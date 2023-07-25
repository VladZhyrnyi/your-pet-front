import styled from 'styled-components';

export const LogoContainer = styled.div`
width: 116px;
height:20px;
padding-top: 2px;

@media screen and (min-width: 768px) {
  width: 162px;
  height: 28px;
  padding-top: 8px;
}
@media screen and (min-width: 1280px) {
  
  width: 162px
  height: 28px
  padding-top: 10px;

`;
export const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  transition: background-color ${p => p.theme.transitionTimingFunction};

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
  }

  &:hover svg,
  &:focus svg {
    color: ${p => p.theme.colors.white};
  }
`;

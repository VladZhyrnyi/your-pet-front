import styled from 'styled-components';

export const HeaderContainer = styled.div`
  //  display: flex;
  //  justify-content: space-between;
  width: 280px;
  height: 28px;
  padding-top: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 44px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
   justify-content: space-between;
    width: 1248px;
    height: 48px;
    padding-top: 20px;
    padding-left: 16px;
  }
`;

export const Menu = styled.div`
z-index: 99999;
`

 export const Modal = styled(Menu)`
 z-index: 99999;
 
 `

export const Button = styled.button`
  //  position: absolute;
  // top: 12px;
  // right: 12px;
  // width: 24px;
  // height: 24px;
  // display: flex;
  align-items: center;
  justify-content: center;
  // padding: 0;
  border-radius: 50%;
  border: none;
  // outline: none;
  // cursor: pointer;
  // background-color: transparent;
  // transition: background-color ${p => p.theme.transitionTimingFunction};

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
    color: ${p => p.theme.colors.blue};
  }
`;
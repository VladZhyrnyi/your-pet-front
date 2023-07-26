import { styled } from 'styled-components';

export const Menu = styled.div`
  z-index: 99999;
`;

export const Modal = styled(Menu)`
  z-index: 99999;
`;

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

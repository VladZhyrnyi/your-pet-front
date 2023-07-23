import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.499);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 280px;
  min-height: 287px;
  margin: 0 auto;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.white};
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    min-width: 608px;
    min-height: 352px;
    padding: 60px;
    border-radius: 40px;
  }
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

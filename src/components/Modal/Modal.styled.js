import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.499);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  min-width: 280px;
  min-height: 287px;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;

  border-radius: 20px;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: 768px) {
    min-width: 608px;
    min-height: 352px;
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
  color: ${p => p.theme.colors.blue};
  background-color: transparent;
  transition: background-color ${p => p.theme.transitionTimingFunction};

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }

  &:hover {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
`;

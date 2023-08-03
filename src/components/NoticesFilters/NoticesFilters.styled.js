import styled from 'styled-components';
import { CiFilter } from 'react-icons/ci';
import { MdAdd } from 'react-icons/md';

export const FilterWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 8;

  @media (min-width: 768px) {
    position: static;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ButtonNoticeFilter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 40px;
  height: 40px;

  cursor: pointer;
  border: none;
  padding: 0;
  border-radius: 100%;
  background-color: ${p => p.theme.colors.blueLight};
  outline: none;

  transition: background-color ${p => p.theme.transitionTimingFunction};

  &:hover {
    background-color: ${p => p.theme.colors.blue};
  }

  &:hover svg {
    color: ${p => p.theme.colors.white};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 8px 20px;

    width: 152px;

    border: 2px solid ${p => p.theme.colors.blue};
    border-radius: 40px;

    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.white};

    font-family: Manrope700, sans-serif;
    font-size: 16px;
    letter-spacing: 0.64px;
    transition: color ${p => p.theme.transitionTimingFunction};

    &:hover {
      color: ${p => p.theme.colors.white};
      border: 2px solid transparent;
      background-image: ${p => p.theme.linearGradient};
      background-origin: border-box;
      background-repeat: no-repeat;
    }

    &:hover svg {
      color: ${p => p.theme.colors.white};
    }
  }
`;

export const ButtonNoticeAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 137px;
  padding: 8px 20px;

  cursor: pointer;
  border: none;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  outline: none;

  font-family: Manrope700, sans-serif;
  font-size: 16px;
  letter-spacing: 0.64px;
  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover {
    color: ${p => p.theme.colors.white};
    background-image: ${p => p.theme.linearGradient};
  }
`;

export const IconFilter = styled(CiFilter)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.blue};

  transition: color ${p => p.theme.transitionTimingFunction};
`;

export const IconAdd = styled(MdAdd)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};
`;



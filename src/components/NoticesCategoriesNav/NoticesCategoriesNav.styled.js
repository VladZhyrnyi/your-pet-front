import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { CiFilter } from 'react-icons/ci';
import { MdAdd } from 'react-icons/md';

export const ContainerNav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 43px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;

  width: 205px;

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
    width: 319px;
  }

  @media (min-width: 1280px) {
    width: 319px;
    width: auto;
  }
`;

export const NoticesLink = styled.button`
  border: none;
  padding: 8px 16px;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.blueLight};

  color: ${p => p.theme.colors.blue};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;

  transition: transform ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }

  &.active {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
`;

export const ButtonFilterWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

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

  transition: background-color ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
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

    &:hover,
    &:focus {
      color: ${p => p.theme.colors.white};
      border: 2px solid transparent;
      background-image: ${p => p.theme.linearGradient};
      background-origin: border-box;
      background-repeat: no-repeat;
    }

    &:hover svg,
    &:focus svg {
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

  font-family: Manrope700, sans-serif;
  font-size: 16px;
  letter-spacing: 0.64px;
  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
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

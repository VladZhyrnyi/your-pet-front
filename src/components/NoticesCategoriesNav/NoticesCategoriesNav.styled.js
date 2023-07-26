import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { CiFilter } from 'react-icons/ci';
import { ButtonWhiteBig } from 'components/Buttons';

export const Container = styled.div`
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
  width: 205px;
  flex-wrap: wrap;
  gap: 8px;

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
    width: 319px;
  }

  @media (min-width: 1280px) {
    width: 319px;
    width: auto;
  }
`;

export const NoticesLink = styled(NavLink)`
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

  /* display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px; */

  width: 40px;
  height: 40px;

  background-color: red;

  @media (min-width: 768px) {
    gap: 12px;
    width: auto;
  }
  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ButtonNoticeFilter = styled(ButtonWhiteBig)`
  width: 40px;
  height: 40px;
`;
// export const ButtonNoticeFilter = styled.button`
//   display: flex;
//   /* flex-direction: column-reverse; */
//   align-items: center;
//   justify-content: center;
//   gap: 8px;

//   width: 40px;
//   height: 40px;

//   /* width: ${({ width }) => width || 'auto'}; */
//   border: none;
//   padding: 0;
//   border-radius: 100%;
//   background-color: ${p => p.theme.colors.blueLight};

//   /* color: ${({ color }) => color};
//   font-family: Manrope, sans-serif;
//   font-size: 12px;
//   font-weight: 600; */

//   transition: background-color ${p => p.theme.transitionTimingFunction};

//   &:hover,
//   &:focus {
//     background-color: ${p => p.theme.colors.blue};
//   }

//   &:hover svg,
//   &:focus svg {
//     color: ${p => p.theme.colors.white};
//   }

//   @media (min-width: 768px) {
//     flex-direction: row;
//     padding: 8px 16px;
//     height: 35px;

//     border: 2px solid #54adff;

//     font-size: 16px;
//     font-weight: 700;
//     border-radius: 40px;
//     letter-spacing: 0.56px;
//   }
// `;

export const Filter = styled(CiFilter)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.blue};
`;

export const Div = styled.div`
  position: absolute;
  bottom: 20px;
`;

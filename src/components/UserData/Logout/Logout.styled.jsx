import styled from 'styled-components';

export const LogOutBtn = styled.button`
  display: flex;
  gap: 12px;
  justify-content: left;
  margin-top: 25px;
  width: 100px;
  height: 24px;
  padding: 0;
  text-align: center;
  align-items: center;

  color: ${p => p.theme.colors.grey};
  background-color: transparent;

  border: none;
  cursor: pointer;

  font-family: Manrope400, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }

  @media screen and (min-width: 768px) {
    margin-top: 15px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 23px;
  }
`;

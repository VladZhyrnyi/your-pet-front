import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  margin: 80px auto;
  width: 282px;

  color: rgba(0, 0, 0, 1);

  font-family: Manrope700, sans-serif;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: 60px auto 80px auto;
    width: 458px;

    font-size: 32px;
    font-weight: 600;
    line-height: 42px;
  }
`;

export const Img = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 123px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 308px;
    gap: 12px;
  }

  @media screen and (min-width: 1280px) {
    height: 360px;
  }
`;

export const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;

  background-color: ${p => p.theme.colors.yellow};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 278px;
    height: 278px;
  }

  @media screen and (min-width: 1280px) {
    width: 325px;
    height: 325px;
  }
`;

export const Btn = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 18px;
  }
`;

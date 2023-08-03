import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerWrap = styled.div`
  margin: 40px auto 0 auto;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 703px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    width: 821px;
  }
`;

export const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto 24px auto;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.black};

  font-family: Manrope500, sans-serif;
  font-size: 20px;
  line-height: normal;
  letter-spacing: 0.8px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const BtnAddPet = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  width: 129px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  border: transparent;
  border-radius: 40px;
  cursor: pointer;
  transition: color ${p => p.theme.transitionTimingFunction};

  font-family: Manrope700, sans-serif;
  font-size: 16px;
  letter-spacing: 0.64px;

  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
  }
`;

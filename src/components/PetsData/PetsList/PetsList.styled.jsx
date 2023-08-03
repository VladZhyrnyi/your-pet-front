import styled from 'styled-components';

export const PetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 137px;

  @media screen and (min-width: 768px) {
    margin-bottom: 121px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-bottom: 85px;
  }
`;

export const Title = styled.h2`
  margin-top: 40px;

  color: ${p => p.theme.colors.black};

  font-family: Manrope500, sans-serif;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 0.8px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const TmpWrap = styled.div`
  margin-top: 20px;

  color: ${p => p.theme.colors.blue};
`;

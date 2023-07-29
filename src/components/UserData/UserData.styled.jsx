import styled from 'styled-components';

export const UserPageWrap = styled.h1`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
  }
`;

export const Title = styled.h1`
  margin: 40px auto 18px auto;

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

export const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 8px 20px 8px;
  width: 280px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.first};

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    padding: 20px 24px 20px 16px;
  }
`;

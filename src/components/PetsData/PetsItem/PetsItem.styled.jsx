import styled from 'styled-components';

export const ItemWrap = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  padding: 16px 20px 40px 20px;
  width: 100%;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.boxShadow.first};

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    min-height: 256px;
    padding: 20px;
    flex-wrap: nowrap;

    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const PetImg = styled.img`
  width: 100%;
  height: 240px;

  background-color: ${p => p.theme.colors.blueLight};

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 266px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  color: ${p => p.theme.colors.blue};
  background-color: transparent;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
  }

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`;

export const PetData = styled.div`
  margin-top: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 20px;
  }
`;

export const PetText = styled.h3`
  margin-bottom: 12px;

  color: ${p => p.theme.colors.black};

  font-family: Manrope700, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) {
    font-family: Manrope600, sans-serif;
  }
`;

export const LtlText = styled.span`
  color: ${p => p.theme.colors.black};

  font-family: Manrope400, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;
`;

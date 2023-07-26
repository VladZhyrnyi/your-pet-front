import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 28px;
  border-radius: 40px;
  cursor: pointer;
  font-family: Manrope600, sans-serif;
  font-size: 16px;
  letter-spacing: 0.64px;
  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
    background-origin: border-box;
    background-repeat: no-repeat;
  }
`;

export const BtnLmWhite = styled(Button)`
  width: 248px;
  border: 2px solid ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.white};
  font-weight: 600;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    border: 2px solid transparent;
    background-image: ${p => p.theme.linearGradient};
  }
`;

export const BtnLmBlue = styled(Button)`
  width: 248px;
  border: transparent;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  font-family: Manrope700, sans-serif;

  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
  }
`;

export const BtnLmBlueSmall = styled(BtnLmBlue)`
  width: 170px;
  gap: 8px;
  padding: 8px 20px;
`;

export const BtnLmWhiteSmall = styled(BtnLmWhite)`
  width: 170px;
  gap: 8px;
  padding: 8px 20px;
  font-family: Manrope700, sans-serif;
`;

export const BtnAddPet = styled.button`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  box-shadow: ${p => p.theme.boxShadow.second};
  font-family: Manrope600, sans-serif;
  font-size: 12px;
  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
    background-origin: border-box;
    background-repeat: no-repeat;
  }
`;

export const BtnFilter = styled.button`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  border: 2px solid ${p => p.theme.colors.blue};
  border-radius: 40px;
  cursor: pointer;
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
`;

export const BtnLocation = styled.button`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 4px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.blueLight};

  font-family: Manrope600, sans-serif;
  font-size: 12px;
  letter-spacing: 0.64px;
  transition: background-color ${p => p.theme.transitionTimingFunction};

  svg {
    display: block;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
  }

  &:hover div {
    color: ${p => p.theme.colors.white};
  }

  &:hover span {
    color: ${p => p.theme.colors.white};
  }
`;

export const WrapperIcon = styled.div`
  color: ${p => p.theme.colors.blue};
  transition: color ${p => p.theme.transitionTimingFunction};
`;

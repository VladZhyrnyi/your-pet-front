import {
  BtnLmWhite,
  BtnLmBlue,
  BtnLmWhiteSmall,
  BtnLmBlueSmall,
  BtnAddPet,
  BtnFilter,
  BtnLocation,
} from './Button.styled';

export const ButtonWhiteBig = ({ prop, children }) => {
  return <BtnLmWhite onClick={prop}>{children}</BtnLmWhite>;
};

export const ButtonBlueBig = ({ prop, children }) => {
  return <BtnLmBlue onClick={prop}>{children}</BtnLmBlue>;
};

export const ButtonBlueSmall = ({ prop, children }) => {
  return <BtnLmBlueSmall onClick={prop}>{children}</BtnLmBlueSmall>;
};

export const ButtonWhiteSmall = ({ prop, children }) => {
  return <BtnLmWhiteSmall onClick={prop}>{children}</BtnLmWhiteSmall>;
};

export const ButtonAddPet = ({ prop, children }) => {
  return <BtnAddPet onClick={prop}>{children}</BtnAddPet>;
};

export const ButtonFilter = ({ prop, children }) => {
  return <BtnFilter onClick={prop}>{children}</BtnFilter>;
};

export const ButtonLocation = ({ prop, children }) => {
  return <BtnLocation onClick={prop}>{children}</BtnLocation>;
};

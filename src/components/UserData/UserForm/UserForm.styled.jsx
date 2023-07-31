import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;

export const IconChange = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  color: ${p => p.theme.colors.blue};
  background-color: transparent;

  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
  }

  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const ImgWrap = styled.div`
 margin: 0px auto;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }

  @media screen and (min-width: 768px) {
    margin: 0px auto;
`;

export const Img = styled.img`
  width: 182px;
  height: 182px;

  background-color: ${p => p.theme.colors.blueLight};
  border-radius: 40px;
  overflow: hidden;
`;

export const PhotoBtn = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 14px auto 0 auto;
  padding: 0;
  align-items: center;

  width: 98px;
  height: 24px;

  color: ${p => p.theme.colors.black};
  background-color: transparent;

  border: none;
  cursor: pointer;

  font-family: Manrope400, sans-serif;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.48px;

  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const Form = styled.form`
  margin-top: 21px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    width: 355px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 25px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;

  &:first-child {
    margin-top: 0px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  width: 182px;
  padding: 4px 12px;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.blue};

  font-family: Manrope400, sans-serif;
  font-size: 12px;
  line-height: normal;
  letter-spacing: 0.48px;

  border-radius: 20px;
  outline: none;

  disabled: ${props => (props.permis ? true : false)};

  @media screen and (min-width: 768px) {
    width: 255px;
  }
`;

export const BtnSave = styled.button`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 248px;
  padding-top: 6px;
  padding-bottom: 6px;
  text-align: center;
  align-content: center;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  border-radius: 40px;
  border: none;
  cursor: pointer;

  font-family: Manrope700, sans-serif;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.56px;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
    width: 255px;
  }
`;

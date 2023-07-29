import { styled } from 'styled-components';

export const Form = styled.form`
  margin: 40px auto 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 12px;
  width: auto;
  max-width: 608px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: ${p => p.theme.boxShadow.second};
  @media (min-width: 768px) {
    margin: 80px auto 0;
    width: 608px;
    padding: 60px 75px;
    border-radius: 40px;
  }
`;

export const FormTitle = styled.p`
  font-size: 24px;
  font-family: Manrope500;
  margin: 0 0 20px 0;
  @media (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 0.04;
    margin: 0 0 40px 0;
  }
`;

export const InputFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 110px;
  width: 100%;
  max-width: 458px;
  @media (min-width: 768px) {
    gap: 32px;
    margin-bottom: 60px;
  }
  //   @media (min-width: 1280px) {
  //     margin-bottom: 40px;
  //   }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 458px;
`;

export const ShowHidePasswordBtn = styled.button`
  position: absolute;
  height: 48px;
  top: 0;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const SubmitBtn = styled.button`
  font-family: Manrope600;
  font-size: 20px;
  letter-spacing: 0.04;
  width: 100%;
  max-width: 458px;
  height: 48px;
  border: 1px solid #54adff;
  border-radius: 40px;
  background-color: #54adff;
  color: #ffffff;
  padding: 0;
  margin-bottom: 8px;
  transition: color ${p => p.theme.transitionTimingFunction};
  &:hover,
  &:focus {
    background-image: ${p => p.theme.linearGradient};
    background-origin: border-box;
    background-repeat: no-repeat;
  }
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const PasswordInputErrorMessage = styled.p`
  font-size: 12px;
  margin: 0 0 0 17px;
  color: #f43f5e;
`;

export const LinkToRegister = styled.p`
  font-family: Manrope400;
  font-size: 12px;
  color: #888888;
  margin: 0;
  & a {
    color: ${p => p.theme.colors.blue};
  }
`;

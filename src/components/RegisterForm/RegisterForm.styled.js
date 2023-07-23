import { styled } from 'styled-components';

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 12px;
  width: 280px;
  background-color: yellow;
  border-radius: 20px;
  filter: drop-shadow(3px 4px 14px #88c6fd);
`;

export const FormTitle = styled.p`
  margin: 0 0 20px 0;
`;

export const InputFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  width: 256px;
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
  width: 100%;
  height: 48px;
  border: 1px solid #54adff;
  border-radius: 40px;
  background-color: #54adff;
  color: #ffffff;
  padding: 0;
`;

export const PasswordInputErrorMessage = styled.p`
  font-size: 12px;
  margin: 0 0 0 17px;
  color: #f43f5e;
`;

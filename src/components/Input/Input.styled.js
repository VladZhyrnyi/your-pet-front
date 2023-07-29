import { styled } from 'styled-components';

export const InputField = styled.input`
  border: 1px solid #54adff;
  outline: none;
  border-radius: 40px;
  width: calc(100% - 16px);
  height: 46px;
  padding: 0 0 0 16px;
  &::placeholder {
    font-size: 16px;
    line-hieght: 1.5;
    lettet-spacing: 0.04;
    font-family: Manrope400;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputErrorMessage = styled.p`
  font-family: Manrope400;
  font-size: 12px;
  margin: 4px 0 0 17px;
  color: #f43f5e;
`;

export const DeleteValueBtn = styled.button`
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

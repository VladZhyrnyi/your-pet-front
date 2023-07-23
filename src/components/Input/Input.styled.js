import { styled } from 'styled-components';

export const InputField = styled.input`
  border: 1px solid #54adff;
  border-radius: 40px;
  width: calc(100% - 16px);
  height: 46px;
  padding: 0 0 0 16px;
  &::placeholder {
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const InputErrorMessage = styled.p`
  font-size: 12px;
  margin: 0 0 0 17px;
  color: #f43f5e;
`;

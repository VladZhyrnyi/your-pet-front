import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

export const Form = styled.form`
  display: flex;
  justify-content: center;

  padding-top: 24px;

 

  @media (min-width: 768px) {
    padding-top: 40px;
  }
`;

export const Input = styled.input`
  padding: 14px 78px 14px 20px;

  border-radius: 24px;
  border: none;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  color: ${p => p.theme.colors.grey};
  font-family: Inter400, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${p => p.theme.colors.grey};
    font-family: Inter400, sans-serif;
    font-size: 14px;
    letter-spacing: 0.56px;
  }
  @media (min-width: 768px) {
    width: 608px;
    padding: 10px 88px 10px 20px;

    font-size: 20px;
    letter-spacing: 0.8px;

    ::placeholder {
      font-size: 20px;
      letter-spacing: 0.8px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 13px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (min-width: 768px) {
    right: 20px;
  }
`;

export const IconSearch = styled(FiSearch)`
  width: 24px;
  height: 24px;

  color: ${p => p.theme.colors.blue};

  transition: transform ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const IconCross = styled(RxCross1)`
  width: 24px;
  height: 24px;

  color: ${p => p.theme.colors.yellow};

  transition: transform ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;

export const Button = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: ${p => p.theme.colors.white};

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: none;
    transform: scale(1.15);
  }
`;

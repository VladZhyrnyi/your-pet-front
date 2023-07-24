import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 40px 0 24px;
  padding: 0;

  color: #111;
  text-align: center;
  font-family: Manrope700, sans-serif;
  font-size: 24px;

  @media (min-width: 768px) {
    margin: 80px 0 40px;
    font-size: 48px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 280px;
  height: 44px;
  padding: 0 12px 0 20px;

  border-radius: 24px;
  border: none;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  color: #888;
  font-family: Inter400, sans-serif;
  font-size: 20px;
  letter-spacing: 0.56px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #888;
    font-family: Inter400, sans-serif;
    font-size: 14px;
    letter-spacing: 0.56px;
  }
  @media (min-width: 768px) {
    width: 608px;
    padding: 0 20px 0 20px;

    font-size: 20px;
    letter-spacing: 0.56px;

    ::placeholder {
      font-size: 20px;
      letter-spacing: 0.8px;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: #fff;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: none;
    transform: scale(1.15);
  }
`;

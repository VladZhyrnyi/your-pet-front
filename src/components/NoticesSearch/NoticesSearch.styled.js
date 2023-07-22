import styled from 'styled-components';

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
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.56px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #888;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
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
  /* width: 280px; */

  @media (min-width: 768px) {
    /* width: 608px; */
  }
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

  &:hover svg,
  &:focus svg {
    /* background-color: #54adff; */
    /* fill: red; */
  }
`;

export const SvgSubmit = styled.svg`
  width: 24px;
  height: 24px;
  fill: #54adff;

  /* transition: background-color 3000ms cubic-bezier(0.4, 0, 0.2, 1); */
  /* transition: fill 500ms cubic-bezier(0.4, 0, 0.2, 1); */
  /* transition: transform 1000ms cubic-bezier(0.4, 0, 0.2, 1); */
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.15);
  }
`;

export const SvgClean = styled.svg`
background-color: red;
  width: 24px;
  height: 24px;
  fill: #ffc107;
`;

import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 280px;
  margin-top: 40px;
  margin-bottom: 44px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 62px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 82px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 14px 20px;

  font-family: Inter400;
  font-size: 14px;
  line-height: normal;
  letter-spacing: 0.56px;
  color: ${p => p.theme.colors.grey};

  background-color: ${p => p.theme.colors.white};
  box-sizing: border-box;
  box-shadow: ${p => p.theme.boxShadow.first};
  border-radius: 24px;
  border: none;
  outline: none;
  transition: box-shadow ${p => p.theme.transitionTimingFunction};

  &::placeholder {
    font-family: Inter400;
    font-size: 14px;
    line-height: normal;
    letter-spacing: 0.56px;
    color: ${p => p.theme.colors.grey};
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 20px;
    letter-spacing: 0.8px;

    &::placeholder {
      font-size: 20px;
    }
    &:hover {
      box-shadow: ${p => p.theme.boxShadow.second};
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  @media screen and (min-width: 768px) {
    right: 20px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: transform ${p => p.theme.transitionTimingFunction};
  color: ${p => p.theme.colors.blue};

  &:hover {
    border: none;
    transform: scale(1.3);
  }
`;
export const CloseButton = styled(SearchButton)`
  color: ${p => p.theme.colors.yellow};
`;
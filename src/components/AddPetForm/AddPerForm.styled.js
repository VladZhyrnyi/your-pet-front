import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 280px;
  height: 496px;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;
  margin: 0 auto;
  background: var(--unnamed, #fff);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const Title = styled.h1`
  font-family: Manrope500, sans-serif;
  margin: 0;
  margin-left: 12px;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const OptionList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 14px;
  margin-top: 24px;
`;

export const OptionItemCurrent = styled.li`
  position: relative;
  width: calc((100% - 28px) / 3);
  color: ${p => p.theme.colors.blue};
  font-family: Manrope500, sans-serif;
  font-size: 10px;
  font-style: normal;
  line-height: normal;
`;
export const OptionItem = styled.li`
  position: relative;
  width: calc((100% - 28px) / 3);
  color: #888888;
  font-family: Manrope500, sans-serif;
  font-size: 10px;
  font-style: normal;
  line-height: normal;
`;

export const OptionLineCurrent = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.blue};
  bottom: -20px;
  left: 0;
  border-radius: 8px;
`;
export const OptionLine = styled.div`
  position: absolute;
  height: 8px;
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.blueLight};
  bottom: -20px;
  left: 0;
  border-radius: 8px;
`;

export const Form = styled.form`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
`;

export const ButtonNext = styled.button`
  display: flex;
  cursor: pointer;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.blue};
  gap: 12px;

  border-radius: 40px;
  border: none;

  color: ${p => p.theme.colors.white};
  font-family: Manrope700, sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;

  & svg {
    transform: scale(1);
    transition: transform ${p => p.theme.transitionTimingFunction};
  }

  &:hover svg {
    transform: scale(1.3);
    transition: transform ${p => p.theme.transitionTimingFunction};
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  cursor: pointer;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 40px;
  border: none;
  background: ${p => p.theme.colors.white};

  color: ${p => p.theme.colors.blue};
  font-family: Manrope700, sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;

  & svg {
    transform: translate(0);
    transition: transform ${p => p.theme.transitionTimingFunction};
  }

  &:hover svg {
    transform: translate(-30%);
    transition: transform ${p => p.theme.transitionTimingFunction};
  }
`;

export const RadioLabel = styled.label`
  background-color: ${p => p.theme.colors.blueLight};
  width: fit-content;
  color: ${p => p.theme.colors.blue};
  font-family: Manrope500;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.56px;
  padding: 8px 16px;
  border-radius: 40px;
  border-radius: 40px;
  cursor: pointer;
`;

export const RadioBtn = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.blue};
  }
`;

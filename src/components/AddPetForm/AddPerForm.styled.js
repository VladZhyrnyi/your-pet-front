import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 280px;
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

export const OptionItemDone = styled.li`
  position: relative;
  width: calc((100% - 28px) / 3);
  color: ${p => p.theme.colors.green};
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

export const OptionLineDone = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.green};
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

export const FormOption = styled.form`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormPersonal = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormYourMore = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 90px;
`;

export const SecondButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
`;

export const ButtonNext = styled.button`
  display: inline-flex;
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
  margin: 0;
  display: inline-flex;
  cursor: pointer;
  width: 248px;
  padding: 8px 28px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 40px;
  border: none;
  background: #fff;

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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
  width: 245px;
  height: 20px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid ${p => p.theme.colors.blue};
`;

export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
`;

export const FileTitle = styled.p`
  color: ${p => p.theme.colors.black};
  margin: 0px 14px 0px 0px;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
`;

export const FileDiv = styled.div`
  position: relative;
  border-radius: 20px;
  display: inline-block;
  width: 112px;
  height: 112px;
  background-color: ${p => p.theme.colors.blueLight};
  margin: 0 auto;

  & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const FileLabel = styled.label`
  width: 100%;
  height: 100%;
`;
export const FileLabelLost = styled.label`
  height: 100%;
`;

export const FileInput = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 245px;
  height: 92px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  resize: none;

  border-radius: 20px;
  border: 1px solid ${p => p.theme.colors.blue};

  color: #888;
  font-family: Manrope400, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 21px; /* 21px */
  letter-spacing: 0.56px;

  &::placeholder {
    color: #888;
    font-family: Manrope400, sans-serif;
    font-size: 14px;
    font-style: normal;
    line-height: 21px; /* 21px */
    letter-spacing: 0.56px;
  }
`;

export const FormLostMore = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const FormLostPers = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 36px;
`;

export const SexContainer = styled.div`
  display: flex;
`;

export const RadioLabelSex = styled.label`
  height: 35px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 12px;
  width: fit-content;
  color: #888;
  font-family: Manrope500;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.56px;
  padding: 8px 16px;
  border-radius: 40px;
  border-radius: 40px;
  cursor: pointer;

  & svg {
    fill: green;
  }
`;

export const RadioBtnSex = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const SexTitle = styled.p`
  margin-top: 36px;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
`;

export const FileSellTitle = styled.p`
  width: 81px;
  color: ${p => p.theme.colors.black};
  margin-right: 14px;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
`;

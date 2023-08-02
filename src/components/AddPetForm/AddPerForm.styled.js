import { styled } from 'styled-components';

export const Container = styled.div`
  box-sizing: content-box;
  position: relative;
  width: 264px;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 20px;
  background: var(--unnamed, #fff);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: 768px) {
    width: 392px;
    margin-top: 40px;
    min-height: 502px;
    padding: 20px 34px 20px 32px;
  }
`;

export const SecondSexContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
`;

export const MoreInfoContainer = styled.div`
  box-sizing: content-box;
  position: relative;
  width: 264px;
  padding: 20px 8px 17px 8px;
  border-radius: 40px;
  margin: 0 auto;
  background: var(--unnamed, #fff);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: 768px) {
    width: 638px;
    min-height: 502px;
    padding: 20px 34px 20px 32px;
  }

  @media (min-width: 1280px) {
    width: 757px;
  }
`;

export const MoreInfoTitle = styled.div`
  box-sizing: content-box;
  text-align: center;
`;

export const Title = styled.h1`
  box-sizing: content-box;
  font-family: Manrope500, sans-serif;
  margin: 0;
  margin-left: 12px;
  font-size: 20px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 0;
  }
`;

export const OptionList = styled.ul`
  box-sizing: content-box;
  display: flex;
  list-style: none;
  width: 264px;
  margin: 0 auto;
  padding: 0;
  gap: 14px;
  margin-top: 24px;
  justify-content: space-around;

  @media (min-width: 768px) {
    gap: 16px;
    justify-content: unset;
    width: 392px;
    margin: 24px auto;
  }
`;

export const OptionItemCurrent = styled.li`
  box-sizing: content-box;
  position: relative;
  width: calc((100% - 28px) / 3);
  color: ${p => p.theme.colors.blue};
  font-family: Manrope500, sans-serif;
  font-size: 10px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 120px;
  }
`;

export const OptionItemDone = styled.li`
  box-sizing: content-box;
  position: relative;
  width: calc((100% - 28px) / 3);
  color: ${p => p.theme.colors.green};
  font-family: Manrope500, sans-serif;
  font-size: 10px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 16px;
    min-width: 120px;
    width: calc((100% - 32px) / 3);
  }
`;

export const OptionItem = styled.li`
  box-sizing: content-box;
  position: relative;
  width: calc((100% - 28px) / 3);
  color: #888888;
  font-family: Manrope500, sans-serif;
  font-size: 10px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 120px;
  }
`;

export const OptionLineCurrent = styled.div`
  box-sizing: content-box;
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.blue};
  bottom: -20px;
  left: 0;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const OptionLineDone = styled.div`
  box-sizing: content-box;
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.green};
  bottom: -20px;
  left: 0;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const OptionLine = styled.div`
  box-sizing: content-box;
  position: absolute;
  height: 8px;
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.blueLight};
  bottom: -20px;
  left: 0;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const FormOption = styled.form`
  box-sizing: content-box;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormPersonal = styled.form`
  box-sizing: content-box;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const FormYourMore = styled.form`
  box-sizing: content-box;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ButtonContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 90px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    margin-top: 146px;
  }
`;

export const SecondButtonContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ThirdButtonContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-top: 24px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    margin: 36px auto 0px auto;
  }
`;

export const ButtonNext = styled.button`
  /* box-sizing: content-box; */
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
  &:focus svg {
    transform: scale(1.3);
    transition: transform ${p => p.theme.transitionTimingFunction};
  }
`;

export const ButtonCancel = styled.a`
  box-sizing: content-box;
  margin: 0;
  display: inline-flex;
  cursor: pointer;
  width: 192px;
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
  &:focus svg {
    transform: translate(-30%);
    transition: transform ${p => p.theme.transitionTimingFunction};
  }

  @media (min-width: 768px) {
    max-width: 88px;
  }
`;

export const RadioLabel = styled.label`
  box-sizing: content-box;
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
  box-sizing: content-box;
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const Label = styled.label`
  box-sizing: content-box;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    gap: 8px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  box-sizing: content-box;
  position: relative;
  display: flex;
  height: 20px;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid ${p => p.theme.colors.blue};
  outline: none;

  &::placeholder {
    color: var(--c, #888);
    font-family: Manrope400;
    font-size: 14px;
    font-style: normal;
    line-height: 24px;
    letter-spacing: 0.64px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  & + span {
    display: none;
    opacity: 0;
  }

  &:required {
    border: 1px solid red;
  }
  &:required + span {
    position: absolute;
    display: unset;
    color: red;
    opacity: 1;
    left: 17px;
    bottom: -17px;
    color: var(--red, #f43f5e);
    font-family: Manrope400;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
  }

  @media (min-width: 768px) {
    min-width: 360px;
    height: 30px;
  }
`;

export const FileContainer = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: unset;
    margin-top: 38px;
  }
`;
export const FileContainerYour = styled.div`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  margin-top: 16px;

  @media (min-width: 768px) {
    align-items: center;
    margin-top: 38px;
  }
`;

export const FileTitle = styled.p`
  box-sizing: content-box;
  color: ${p => p.theme.colors.black};
  margin: 0px 14px 0px 0px;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    margin: 0px 16px 0px 0px;
    font-size: 20px;
    min-width: 114px;
    margin-bottom: 8px;
  }
`;

export const FileDiv = styled.div`
  box-sizing: content-box;
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

  @media (min-width: 768px) {
    min-width: 182px;
    min-height: 182px;
    border-radius: 40px;
  }
`;

export const FileLabel = styled.label`
  box-sizing: content-box;
  width: 100%;
  height: 100%;
`;
export const FileLabelLost = styled.label`
  box-sizing: content-box;
  height: 100%;
`;

export const FileInput = styled.input`
  box-sizing: content-box;
  width: 1px;
  height: 1px;
  opacity: 0;

  &:required + label > div {
    outline: 1px solid red;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: content-box;
  display: flex;
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
  line-height: 21px;
  letter-spacing: 0.56px;

  outline: none;

  & + span {
    display: none;
    opacity: 0;
  }

  &:required {
    border: 1px solid red;
  }
  &:required + span {
    position: absolute;
    display: unset;
    color: red;
    opacity: 1;
    left: 17px;
    bottom: -17px;
    color: var(--red, #f43f5e);
    font-family: Manrope400;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
  }

  @media (min-width: 768px) {
    min-width: 359px;
    max-height: 61px;
  }

  &::placeholder {
    color: #888;
    font-family: Manrope400, sans-serif;
    font-size: 14px;
    font-style: normal;
    line-height: 21px;
    letter-spacing: 0.56px;

    @media (min-width: 768px) {
      color: var(--c, #888);
      font-family: Manrope400;
      font-size: 16px;
      font-style: normal;
      line-height: 24px;
      letter-spacing: 0.64px;
    }
  }
`;
export const TextAreaLost = styled.textarea`
  box-sizing: content-box;
  display: flex;
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
  line-height: 21px;
  letter-spacing: 0.56px;

  outline: none;

  & + span {
    display: none;
    opacity: 0;
  }

  &:required {
    border: 1px solid red;
  }
  &:required + span {
    position: absolute;
    display: unset;
    color: red;
    opacity: 1;
    left: 17px;
    bottom: -17px;
    color: var(--red, #f43f5e);
    font-family: Manrope400;
    font-size: 12px;
    font-style: normal;
    line-height: normal;
  }

  @media (min-width: 768px) {
    min-width: 359px;
    height: 164px;
  }

  &::placeholder {
    color: #888;
    font-family: Manrope400, sans-serif;
    font-size: 14px;
    font-style: normal;
    line-height: 21px;
    letter-spacing: 0.56px;

    @media (min-width: 768px) {
      color: var(--c, #888);
      font-family: Manrope400;
      font-size: 16px;
      font-style: normal;
      line-height: 24px;
      letter-spacing: 0.64px;
    }
  }
`;

export const FormLostMore = styled.form`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: unset;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: center;
  }
`;

export const LableWrapper = styled.div`
  box-sizing: content-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormLostPers = styled.form`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 36px;
`;

export const SexContainer = styled.div`
  box-sizing: content-box;
  display: flex;
`;

export const RadioLabelSex = styled.label`
  box-sizing: content-box;
  height: 20px;
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
  padding: 8px 10px;
  border-radius: 40px;
  border-radius: 40px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  & svg {
    fill: green;
  }
`;

export const RadioBtnSex = styled.input`
  box-sizing: content-box;
  width: 1px;
  height: 1px;
  opacity: 0;

  &:checked + label {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.blue};
  }

  &:required + label {
    outline: 1px solid red;
  }
`;

export const SexTitle = styled.p`
  box-sizing: content-box;
  margin-top: 36px;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 20px;
    line-height: 26.5px;
  }
`;

export const FileSellTitle = styled.p`
  box-sizing: content-box;
  width: 90px;
  color: ${p => p.theme.colors.black};
  margin-right: 14px;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: normal;

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 8px;
    margin-right: 0px;
    font-size: 20px;
    line-height: 26.5px;
  }
`;

export const PreviewImage = styled.div`
  box-sizing: content-box;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    border-radius: 40px;
  }
`;

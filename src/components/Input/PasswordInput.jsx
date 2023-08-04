import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { findInputError } from 'utils/findInputError';
import { isFormInvalid } from 'utils/isFormInvalid';
import {
  InputWrapper,
  InputField,
  InputErrorMessage,
  PasswordInputWrapper,
  ShowHidePasswordBtn,
  InputIconsWrapper,
  InputSuccessMessage,
} from './PasswordInput.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { theme } from 'theme';

const PasswordInput = ({
  id,
  name,
  placeholder,
  validation,
  onChange,
  valid,
}) => {
  const location = useLocation().pathname;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  const [showPass, setShowPass] = useState(false);
  const onShowPassBtnClick = () => {
    setShowPass(current => !current);
  };

  return (
    <PasswordInputWrapper>
      <InputWrapper>
        <InputField
          id={id}
          name={name}
          type={showPass ? 'text' : 'password'}
          placeholder={placeholder}
          {...register(name, validation)}
          onChange={onChange}
          style={valid ? { border: `1px solid ${theme.colors.green}` } : {}}
        />
        {!valid && isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
        {valid && name === 'password' && location !== '/login' && (
          <InputSuccessMessage>Password is secure</InputSuccessMessage>
        )}
        {valid && name === 'confirmPassword' && (
          <InputSuccessMessage>Passwords match</InputSuccessMessage>
        )}
      </InputWrapper>
      <InputIconsWrapper>
        <ShowHidePasswordBtn onClick={onShowPassBtnClick}>
          <SpriteIcon
            icon={showPass ? 'eye-open' : 'eye-closed'}
            color={valid ? '#888888' : `${theme.colors.blue}`}
            size="24px"
          />
        </ShowHidePasswordBtn>
        {valid && (
          <SpriteIcon
            icon={'check'}
            color={`${theme.colors.green}`}
            size="24px"
          />
        )}
      </InputIconsWrapper>
    </PasswordInputWrapper>
  );
};

const InputError = ({ message }) => {
  return <InputErrorMessage>{message}</InputErrorMessage>;
};

export const PasswordInputError = ({ message }) => {
  return <InputErrorMessage>{message}</InputErrorMessage>;
};

export default PasswordInput;

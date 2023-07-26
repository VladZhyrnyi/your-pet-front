// import { useState } from 'react';
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
  type,
  id,
  name,
  placeholder,
  validation,
  onChange,
  onClick,
  icon,
  valid,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <PasswordInputWrapper>
      <InputWrapper>
        <InputField
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(name, validation)}
          onChange={onChange}
          style={valid ? { border: `1px solid ${theme.colors.green}` } : {}}
        />
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
        {valid && name === 'password' && (
          <InputSuccessMessage>Password is secure</InputSuccessMessage>
        )}
        {valid && name === 'confirmPassword' && (
          <InputSuccessMessage>Passwords match</InputSuccessMessage>
        )}
      </InputWrapper>
      <InputIconsWrapper>
        <ShowHidePasswordBtn onClick={onClick}>
          <SpriteIcon
            icon={icon}
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

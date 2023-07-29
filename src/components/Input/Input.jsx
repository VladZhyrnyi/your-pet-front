import { useFormContext } from 'react-hook-form';
import { findInputError } from 'utils/findInputError';
import { isFormInvalid } from 'utils/isFormInvalid';
import {
  InputField,
  InputWrapper,
  InputErrorMessage,
  DeleteValueBtn,
} from './Input.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { theme } from 'theme';
const Input = ({ type, id, name, placeholder, validation }) => {
  const {
    register,
    reset,
    formState: { errors },
  } = useFormContext();
  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <InputWrapper>
      <InputField
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(name, validation)}
        style={isInvalid ? { border: `1px solid ${theme.colors.red}` } : {}}
      />
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
      )}
      {isInvalid && type === 'email' && (
        <DeleteValueBtn onClick={() => reset({ email: '' })}>
          <SpriteIcon
            icon={'cross'}
            color={`${theme.colors.red}`}
            size="24px"
          />
        </DeleteValueBtn>
      )}
    </InputWrapper>
  );
};

const InputError = ({ message }) => {
  return <InputErrorMessage>{message}</InputErrorMessage>;
};

export const PasswordInputError = ({ message }) => {
  return <InputErrorMessage>{message}</InputErrorMessage>;
};

export default Input;

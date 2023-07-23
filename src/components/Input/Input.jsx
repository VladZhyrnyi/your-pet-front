import { useFormContext } from 'react-hook-form';
import { findInputError } from 'utils/findInputError';
import { isFormInvalid } from 'utils/isFormInvalid';
import { InputField, InputWrapper, InputErrorMessage } from './Input.styled';
const Input = ({ type, id, name, placeholder, validation, onChange }) => {
  const {
    register,
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
        onChange={onChange}
      />
      {isInvalid && (
        <InputError
          message={inputError.error.message}
          key={inputError.error.message}
        />
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

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/Auth/operations';
import { selectIsError, selectErrorMessage } from 'redux/Auth/selectors';

import { Link } from 'react-router-dom';
import Input from 'components/Input/Input';
import PasswordInput from 'components/Input/PasswordInput';
import { email_validation, password_validation } from 'utils/inputValidations';
import {
  Form,
  FormTitle,
  InputFieldsWrapper,
  SubmitBtn,
  LinkToRegister,
} from './LoginForm.styled';

const LoginForm = () => {
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const methods = useForm();
  const [passIsValid, setPassIsValid] = useState('');
  const onPassInputChange = e => {
    if (password_validation.validation.pattern.value.test(e.target.value)) {
      setPassIsValid('valid');
    } else {
      setPassIsValid('');
    }
  };

  const onSubmit = methods.handleSubmit(data => {
    dispatch(loginUser(data));
    methods.reset();
    setPassIsValid('');
    // setSuccess(true);
  });
  return (
    <FormProvider {...methods}>
      <Form onSubmit={e => e.preventDefault()}>
        {isError && <h2>{errorMessage}</h2>}
        <FormTitle>Login</FormTitle>
        <InputFieldsWrapper>
          <Input {...email_validation} />
          {/* ----- FIRST password input ----- */}
          <PasswordInput
            {...password_validation}
            onChange={onPassInputChange}
            valid={passIsValid}
          />
        </InputFieldsWrapper>
        <SubmitBtn onClick={onSubmit}>Login</SubmitBtn>
        <LinkToRegister>
          Don't have an account? <Link to="/register">Register</Link>
        </LinkToRegister>
      </Form>
    </FormProvider>
  );
};

export default LoginForm;

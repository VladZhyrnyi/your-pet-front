import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
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
  const methods = useForm();
  const [passIsValid, setPassIsValid] = useState('');
  const [passValues, setPassValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setPassValues({ ...passValues, showPassword: !passValues.showPassword });
  };
  const onPassInputChange = e => {
    if (password_validation.validation.pattern.value.test(e.target.value)) {
      setPassIsValid('valid');
      setPassValues({ ...passValues, password: e.target.value });
    } else {
      setPassIsValid('');
    }
  };
  const onSubmit = methods.handleSubmit(data => {
    // if (passValues.password === confPassValues.password) {
    console.log(data);
    methods.reset();
    setPassIsValid('');
    //   setConfPasIsValid('');
    // setSuccess(true);
    // }
  });
  return (
    <FormProvider {...methods}>
      <Form onSubmit={e => e.preventDefault()}>
        <FormTitle>Login</FormTitle>
        <InputFieldsWrapper>
          <Input {...email_validation} />
          {/* ----- FIRST password input ----- */}
          <PasswordInput
            {...password_validation}
            type={passValues.showPassword ? 'text' : 'password'}
            onChange={onPassInputChange}
            onClick={handleClickShowPassword}
            icon={passValues.showPassword ? 'eye-open' : 'eye-closed'}
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

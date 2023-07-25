import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input';
import PasswordInput from 'components/Input/PasswordInput';
import {
  name_validation,
  email_validation,
  password_validation,
  confirm_password_validation,
} from 'utils/inputValidations';
import {
  Form,
  FormTitle,
  InputFieldsWrapper,
  SubmitBtn,
  PasswordInputErrorMessage,
  LinkToLogin,
} from './RegisterForm.styled';

const RegiserForm = () => {
  const methods = useForm();
  const [passIsValid, setPassIsValid] = useState('');
  const [confPassIsValid, setConfPasIsValid] = useState('');
  const [mismatch, setMismatch] = useState(false);
  // ----- State of FIRST password -----
  const [passValues, setPassValues] = useState({
    password: '',
    showPassword: false,
  });
  // ----- State of SECOND password -----
  const [confPassValues, setConfPassValues] = useState({
    password: '',
    showPassword: false,
  });
  // ----- Show FIRST password input -----
  const handleClickShowPassword = () => {
    setPassValues({ ...passValues, showPassword: !passValues.showPassword });
  };
  // ----- Show SECOND password input -----
  const handleClickShowConfPassword = () => {
    setConfPassValues({
      ...confPassValues,
      showPassword: !confPassValues.showPassword,
    });
  };
  // ----- Set value of the FIRST password input -----
  const onPassInputChange = e => {
    if (password_validation.validation.pattern.value.test(e.target.value)) {
      setPassIsValid('valid');
      setPassValues({ ...passValues, password: e.target.value });
    } else {
      setPassIsValid('');
    }
  };
  /* ----- Set value of the SECOND password input 
   in case of matching with value of the fitst pass input ----- */
  const onConfPassInputChange = e => {
    if (e.target.value === passValues.password) {
      setMismatch(false);
      setConfPasIsValid('valid');
      setConfPassValues({ ...confPassValues, password: e.target.value });
    } else {
      setMismatch(true);
      setConfPasIsValid('');
    }
  };
  const onSubmit = methods.handleSubmit(data => {
    if (passValues.password === confPassValues.password) {
      console.log(data);
      methods.reset();
      setPassIsValid('');
      setConfPasIsValid('');
      // setSuccess(true);
    }
  });
  return (
    <FormProvider {...methods}>
      <Form onSubmit={e => e.preventDefault()}>
        <FormTitle>Registration</FormTitle>
        <InputFieldsWrapper>
          <Input {...name_validation} />
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
          {/* ----- SECOND password input ----- */}
          <PasswordInput
            {...confirm_password_validation}
            type={confPassValues.showPassword ? 'text' : 'password'}
            onChange={onConfPassInputChange}
            onClick={handleClickShowConfPassword}
            icon={confPassValues.showPassword ? 'eye-open' : 'eye-closed'}
            valid={confPassIsValid}
          />
          {mismatch && (
            <PasswordInputErrorMessage>
              Password mismatch
            </PasswordInputErrorMessage>
          )}
        </InputFieldsWrapper>
        <SubmitBtn onClick={onSubmit}>Registration</SubmitBtn>
        <LinkToLogin>
          Already have an account? <Link to="/login">Login</Link>
        </LinkToLogin>
      </Form>
    </FormProvider>
  );
};
export default RegiserForm;

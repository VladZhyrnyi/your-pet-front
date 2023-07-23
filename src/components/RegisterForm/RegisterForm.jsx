import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  name_validation,
  email_validation,
  password_validation,
  confirm_password_validation,
} from 'utils/inputValidations';
import {
  Form,
  FormTitle,
  PasswordInputWrapper,
  ShowHidePasswordBtn,
  InputFieldsWrapper,
  SubmitBtn,
  PasswordInputErrorMessage,
} from './RegisterForm.styled';

const RegiserForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
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
    setPassValues({ ...passValues, password: e.target.value });
  };
  /* ----- Set value of the SECOND password input 
   in case of matching with value of the fitst pass input ----- */
  const onConfPassInputChange = e => {
    e.target.value === passValues.password
      ? setMismatch(false)
      : setMismatch(true);
    e.target.value === passValues.password &&
      setConfPassValues({ ...confPassValues, password: e.target.value });
  };
  const onSubmit = methods.handleSubmit(data => {
    if (passValues.password === confPassValues.password) {
      console.log(data);
      methods.reset();
      setSuccess(true);
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
          <PasswordInputWrapper>
            <Input
              {...password_validation}
              type={passValues.showPassword ? 'text' : 'password'}
              onChange={onPassInputChange}
            />
            <ShowHidePasswordBtn onClick={handleClickShowPassword}>
              <SpriteIcon
                icon={passValues.showPassword ? 'eye-open' : 'eye-closed'}
                color="#54adff"
                size="24px"
              />
            </ShowHidePasswordBtn>
          </PasswordInputWrapper>
          {/* ----- SECOND password input ----- */}
          <PasswordInputWrapper>
            <Input
              {...confirm_password_validation}
              type={confPassValues.showPassword ? 'text' : 'password'}
              onChange={onConfPassInputChange}
            />
            <ShowHidePasswordBtn onClick={handleClickShowConfPassword}>
              <SpriteIcon
                icon={confPassValues.showPassword ? 'eye-open' : 'eye-closed'}
                color="#54adff"
                size="24px"
              />
            </ShowHidePasswordBtn>
            {mismatch && (
              <PasswordInputErrorMessage>
                Password mismatch
              </PasswordInputErrorMessage>
            )}
          </PasswordInputWrapper>
        </InputFieldsWrapper>
        <SubmitBtn onClick={onSubmit}>Registration</SubmitBtn>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </FormProvider>
  );
};
export default RegiserForm;

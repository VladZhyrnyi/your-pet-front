import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { registerUser } from 'redux/Auth/operations';
import { selectIsError, selectErrorMessage } from 'redux/Auth/selectors';
import { Link, useNavigate } from 'react-router-dom';
import Input from 'components/Input/Input';
import PasswordInput from 'components/Input/PasswordInput';
import { RegisterModal } from 'components/RegisterModal/RegisterModal';

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
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm();
  const [passIsValid, setPassIsValid] = useState(false);
  const [confPassIsValid, setConfPasIsValid] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  // ----- State of FIRST password -----
  const [passValue, setPassValue] = useState('');
  // ----- State of SECOND password -----
  const [confPassValue, setConfPassValue] = useState('');
  // ----- Set value of the FIRST password input -----
  const onPassInputChange = e => {
    if (password_validation.validation.pattern.value.test(e.target.value)) {
      setPassIsValid(true);
      setPassValue(e.target.value);
    } else {
      setPassIsValid(false);
    }
    setPassValue(e.target.value);
  };
  /* ----- Set value of the SECOND password input 
   in case of matching with value of the fitst pass input ----- */
  const onConfPassInputChange = e => {
    if (e.target.value === passValue) {
      setMismatch(false);
      if (password_validation.validation.pattern.value.test(e.target.value)) {
        setConfPasIsValid(true);
      }
      setConfPassValue(e.target.value);
    } else {
      setMismatch(true);
      setConfPasIsValid(false);
    }
  };
  const onSubmit = methods.handleSubmit(data => {
    const { name, email, password } = data;
    if (passValue === confPassValue) {
      dispatch(registerUser({ name, email, password }))
        .then(data => {
          methods.reset();
          setPassIsValid(false);
          setConfPasIsValid(false);
          if (data.meta.requestStatus === 'fulfilled') {
            setSuccess(true);
          }
        })
        .catch(err => console.log(err));
    }
  });

  const onCloseModal = () => {
    navigate('/login');
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={e => e.preventDefault()}>
          {isError && <h2>{errorMessage}</h2>}
          <FormTitle>Registration</FormTitle>
          <InputFieldsWrapper>
            <Input {...name_validation} />
            <Input {...email_validation} />
            {/* ----- FIRST password input ----- */}
            <PasswordInput
              {...password_validation}
              onChange={onPassInputChange}
              valid={passIsValid}
            />
            {/* ----- SECOND password input ----- */}
            <PasswordInput
              {...confirm_password_validation}
              onChange={onConfPassInputChange}
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
      {success && <RegisterModal onClose={onCloseModal} />}
    </>
  );
};
export default RegiserForm;

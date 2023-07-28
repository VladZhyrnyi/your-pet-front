import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { registerUser } from 'redux/Auth/operations';
import { selectIsError, selectErrorMessage } from 'redux/Auth/selectors';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input';
import PasswordInput from 'components/Input/PasswordInput';
import { Modal } from 'components/Modal';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';

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
  const methods = useForm();
  const [passIsValid, setPassIsValid] = useState('');
  const [confPassIsValid, setConfPasIsValid] = useState('');
  const [success, setSuccess] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  // ----- State of FIRST password -----
  const [passValue, setPassValue] = useState('');
  // ----- State of SECOND password -----
  const [confPassValue, setConfPassValue] = useState('');
  // ----- Set value of the FIRST password input -----
  const onPassInputChange = e => {
    if (password_validation.validation.pattern.value.test(e.target.value)) {
      setPassIsValid('valid');
      setPassValue(e.target.value);
    } else {
      setPassIsValid('');
    }
    setPassValue(e.target.value);
  };
  /* ----- Set value of the SECOND password input 
   in case of matching with value of the fitst pass input ----- */
  const onConfPassInputChange = e => {
    if (e.target.value === passValue) {
      setMismatch(false);
      setConfPasIsValid('valid');
      setConfPassValue(e.target.value);
    } else {
      setMismatch(true);
      setConfPasIsValid('');
    }
  };
  const onSubmit = methods.handleSubmit(async data => {
    if (passValue === confPassValue) {
      dispatch(registerUser(data))
        .then(data => {
          methods.reset();
          setPassIsValid('');
          setConfPasIsValid('');
          setSuccess(true);
        })
        .catch(err => console.log(err));
    }
  });

  const [isLogoutModlaOpen, setIsLogoutModalOpen] = useState(false);
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
      <button onClick={() => setIsLogoutModalOpen(true)}>OpenModal</button>
      {isLogoutModlaOpen && (
        <LogoutModal onClose={() => setIsLogoutModalOpen(false)} />
      )}
      {/* {success && !isError && (
        <Modal onClose={() => setSuccess(false)}>
          <p>Your registration is almost done!</p>
          <br />
          <p>
            We sent you verification mail. <br />
            Please click the link inside it to verify your email.
          </p>
        </Modal>
      )} */}
    </>
  );
};
export default RegiserForm;

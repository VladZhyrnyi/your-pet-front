import Modal from 'components/Modal';
import {
  RegisterModalContentWrapper,
  RegisterModalTitle,
  RegisterModalText,
} from './RegisterModal.styled';

export const RegisterModal = ({ onClose }) => {
  return (
    <Modal closeModal={onClose}>
      <RegisterModalContentWrapper>
        <RegisterModalTitle>
          Your registration is almost done!
        </RegisterModalTitle>
        <RegisterModalText>
          We sent you verification mail. <br />
          Please click the link inside it to verify your email.
        </RegisterModalText>
      </RegisterModalContentWrapper>
    </Modal>
  );
};

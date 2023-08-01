import Modal from 'components/Modal/Modal';
import { ButtonBlueBig } from 'components/Buttons';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  SuccessModalContentWrapper,
  SuccessModalTitle,
  SuccessModalText,
} from './SuccessModal.styled';
export const SuccessModal = ({ onClose }) => {
  return (
    <Modal closeModal={onClose}>
      <SuccessModalContentWrapper>
        <SuccessModalTitle>Congrats!</SuccessModalTitle>
        <SuccessModalText>Your registration is successful</SuccessModalText>
        <ButtonBlueBig prop={onClose}>
          Go to profile
          <SpriteIcon icon="pawprint" size="24px" />
        </ButtonBlueBig>
      </SuccessModalContentWrapper>
    </Modal>
  );
};

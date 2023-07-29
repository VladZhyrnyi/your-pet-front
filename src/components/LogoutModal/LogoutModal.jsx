import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal';
import { ButtonWhiteBig, ButtonBlueBig } from 'components/Buttons';
import {
  LogoutModalContentWrapper,
  LogoutModalTitle,
  LogoutModalBtnWrapper,
} from './LogoutModal.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { logoutUser } from 'redux/Auth/operations';

export const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const onLogoutBtnClick = () => {
    dispatch(logoutUser);
    onClose();
  };
  return (
    <Modal closeModal={onClose}>
      <LogoutModalContentWrapper>
        <LogoutModalTitle>Already leaving?</LogoutModalTitle>
        <LogoutModalBtnWrapper>
          <ButtonWhiteBig prop={onClose}>Cancel</ButtonWhiteBig>
          <ButtonBlueBig prop={onLogoutBtnClick}>
            Yes <SpriteIcon icon={'logout'} />
          </ButtonBlueBig>
        </LogoutModalBtnWrapper>
      </LogoutModalContentWrapper>
    </Modal>
  );
};

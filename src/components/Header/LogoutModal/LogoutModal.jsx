import Modal from "components/Modal/Modal";
import SpriteIcon from "components/SpriteIcon/SpriteIcon";
import { AproveBtn, CancelBtn, ContentWrapper, ControlContainer, TextWrapper } from "./LogoutModal.styled";

const LogoutModal = ({ onCancel, onAprove }) => {
  return (
    <Modal closeModal={onCancel}>
      <ContentWrapper>
        <TextWrapper>Already leaving?</TextWrapper>
        <ControlContainer>
          <CancelBtn onClick={onCancel}>Cancel</CancelBtn>
          <AproveBtn onClick={onAprove}>
            Yes
            <SpriteIcon icon="logout" />
          </AproveBtn>
        </ControlContainer>
      </ContentWrapper>
    </Modal>
  );
};

export default LogoutModal;
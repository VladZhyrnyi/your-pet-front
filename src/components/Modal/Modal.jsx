import { useEffect } from 'react';
import { BackDrop, Button, Content } from './Modal.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handlePressESC);

    return () => {
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <Content>
        {children}
        <Button onClick={closeModal}>
          <SpriteIcon icon="cross" color="#54ADFF"/>
        </Button>
      </Content>
    </BackDrop>
  );
};


import { useState } from 'react';
import { styled } from 'styled-components';

import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/operations';

import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import Modal from 'components/Modal';

const ButtonLogout = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 135px;
  height: 40px;

  font-family: Manrope700, sans-serif;
  font-size: 16px;

  padding: 8px, 20px, 8px, 20px;
  border-radius: 40px;
  border: transparent;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  @media screen and (min-width: 768px) {
    position: static;
  }

  @media screen and (min-width: 1280px) {
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
    background-image: ${p => p.theme.colors.lightBlue};
  }
`;

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <ButtonLogout onClick={openModal}>
        Log out
        <SpriteIcon icon="logout" />
      </ButtonLogout>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          Already leaving?
          <button onClick={closeModal}>cancel</button>
          <button onClick={handleLogout}>
            Yes
            <SpriteIcon icon="logout" />
          </button>
        </Modal>
      )}
    </>
  );
};

export default LogoutBtn;

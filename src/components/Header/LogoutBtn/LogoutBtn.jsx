import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/operations';

import LogoutModal from '../LogoutModal';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

import { ButtonLogout } from './LogoutBtn.styled';

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
        <LogoutModal onAprove={handleLogout} onCancel={closeModal} />
      )}
    </>
  );
};

export default LogoutBtn;

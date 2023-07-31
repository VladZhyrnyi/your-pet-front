import React, { useState } from 'react';
import { LogOutBtn } from './Logout.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/operations';
import LogoutModal from 'components/Header/LogoutModal/LogoutModal';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <LogOutBtn type="button" onClick={openModal}>
        <SpriteIcon icon="logout" color="#54ADFF" size="24px" fill />
        Logout
      </LogOutBtn>
      {isModalOpen && (
        <LogoutModal onAprove={handleLogout} onCancel={closeModal} />
      )}
    </>
  );
};
export default Logout;

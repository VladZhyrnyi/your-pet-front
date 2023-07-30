import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/selectors';

import Modal from 'components/Modal';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import Attention from 'components/Attention';

import { AddPetButton } from './AddPetBtn.styled';

const AddPetBtn = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    if (!isLoggedIn) {
      setShowModal(true);
      return;
    }
    return navigate('/add-pet');
  };

  return (
    <>
      <AddPetButton onClick={handleClick}>
        Add pet
        <SpriteIcon icon="plus" />
      </AddPetButton>
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          <Attention />
        </Modal>
      )}
    </>
  );
};

export default AddPetBtn;

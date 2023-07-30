import Modal from 'components/Modal';
import SpriteIcon from 'components/SpriteIcon/';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { styled } from 'styled-components';

const AddPetButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;

  border: 1px solid transparent;
  border-radius: 40px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  font-family: Manrope700;
  font-size: 16px;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    position: static;
    height: 40px;
    width: 130px;

    flex-direction: row;
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    width: 152px;
  }
`;

const AddPetBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn)

  const handleClick = () => {
    if(!isLoggedIn) {
      setShowModal(true)
      return
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
          some text
          <Link to="/login">Go to login</Link>
          <Link to="/register">Go to Register</Link>
        </Modal>
      )}
    </>
  );
};

export default AddPetBtn;

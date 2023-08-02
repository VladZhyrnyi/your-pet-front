import React, { useState } from 'react';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import Сonfirmation from '../Сonfirmation';
import {
  ItemWrap,
  LtlText,
  PetData,
  PetImg,
  PetText,
  Text,
  RemoveBtn,
} from './PetsItem.styled';
import Modal from 'components/Modal/Modal';

const PetsItem = ({ id, img, name, birth, type, comments }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <ItemWrap key={id}>
        <PetImg src={img} alt="Your pet" width="240" />
        <RemoveBtn type="button" onClick={() => setIsShowModal(true)}>
          <SpriteIcon icon="trash" size="24" />
        </RemoveBtn>

        <PetData>
          <PetText key={`${id}name`}>
            <Text>
              Name: <LtlText>{name}</LtlText>
            </Text>
          </PetText>
          <PetText key={`${id}birth`}>
            <Text>
              Date of birth: <LtlText>{birth}</LtlText>
            </Text>
          </PetText>
          <PetText key={`${id}type`}>
            <Text>
              {' '}
              Type: <LtlText>{type}</LtlText>
            </Text>
          </PetText>
          <PetText key={`${id}comments`}>
            <Text>
              Comments: <LtlText>{comments}</LtlText>
            </Text>
          </PetText>
        </PetData>
      </ItemWrap>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <Сonfirmation closeModal={closeModal} id={id} name={name} />
        </Modal>
      )}
    </>
  );
};

export default PetsItem;

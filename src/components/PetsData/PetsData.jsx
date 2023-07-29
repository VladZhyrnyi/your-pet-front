import React from 'react';
import { ContainerWrap, HeadWrap, Title, BtnAddPet } from './PetsData.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import PetsList from './PetsList/PetsList';

const PetsData = () => {
  return (
    <ContainerWrap>
      <HeadWrap>
        <Title>My pets:</Title>
        <BtnAddPet to="/add-pet">
          Add Pet
          <SpriteIcon icon="plus-small" color="#fFF" size="24px" fill />
        </BtnAddPet>
      </HeadWrap>
      <PetsList />
    </ContainerWrap>
  );
};

export default PetsData;

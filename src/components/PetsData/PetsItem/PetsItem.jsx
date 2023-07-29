import React from 'react';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ItemWrap,
  LtlText,
  PetData,
  PetImg,
  PetText,
  RemoveBtn,
} from './PetsItem.styled';

const PetsItem = ({ id, img, name, birth, type, comments }) => {
  return (
    <ItemWrap>
      <PetImg src={img} alt="Your pet" width="240" />
      <RemoveBtn>
        <SpriteIcon icon="trash" size="24" />
      </RemoveBtn>

      <PetData>
        <PetText>
          Name: <LtlText>{name}</LtlText>
        </PetText>
        <PetText>
          Date of birth: <LtlText>{birth}</LtlText>
        </PetText>
        <PetText>
          Type: <LtlText>{type}</LtlText>
        </PetText>
        <PetText>
          Comments: <LtlText>{comments}</LtlText>
        </PetText>
      </PetData>
    </ItemWrap>
  );
};

export default PetsItem;

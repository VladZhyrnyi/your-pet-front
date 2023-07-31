import React from 'react';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ItemWrap,
  LtlText,
  PetData,
  PetImg,
  PetText,
  Text,
  RemoveBtn,
} from './PetsItem.styled';
import { useDispatch } from 'react-redux';
import { removePet } from 'redux/User/operations';

const PetsItem = ({ id, img, name, birth, type, comments }) => {
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(removePet(id));
  };

  return (
    <ItemWrap key={id}>
      <PetImg src={img} alt="Your pet" width="240" />
      <RemoveBtn type="button" onClick={() => handleClick(id)}>
        <SpriteIcon icon="trash" size="24" />
      </RemoveBtn>

      <PetData>
        <PetText key={`${id}${name}`}>
          <Text>
            Name: <LtlText>{name}</LtlText>
          </Text>
        </PetText>
        <PetText key={`${id}${birth}`}>
          <Text>
            Date of birth: <LtlText>{birth}</LtlText>
          </Text>
        </PetText>
        <PetText key={`${id}${type}`}>
          <Text>
            {' '}
            Type: <LtlText>{type}</LtlText>
          </Text>
        </PetText>
        <PetText key={`${id}${comments}`}>
          <Text>
            Comments: <LtlText>{comments}</LtlText>
          </Text>
        </PetText>
      </PetData>
    </ItemWrap>
  );
};

export default PetsItem;

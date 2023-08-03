import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PetsItem from '../PetsItem';
import { selectMyPets } from 'redux/Auth/selectors';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { Title, PetList, TmpWrap } from './PetsList.styled';

const PetsList = () => {
  const pets = useSelector(selectMyPets);
  const [petsArr, setPetsArr] = useState([]);

  useEffect(() => {
    if (!pets) return;

    setPetsArr(pets);
  }, [pets]);

  return (
    <>
      <PetList>
        {petsArr.length > 0 ? (
          petsArr.map(pet => {
            const { _id, file, name, date, type, comments } = pet;
            return (
              <PetsItem
                key={_id}
                id={_id}
                img={file}
                name={name}
                birth={date}
                type={type}
                comments={comments}
              />
            );
          })
        ) : (
          <>
            <Title>Add your pets here</Title>
            <TmpWrap>
              <SpriteIcon icon="pawprint" color="#54ADFF" size="96px" fill />
            </TmpWrap>
          </>
        )}
      </PetList>
    </>
  );
};

export default PetsList;

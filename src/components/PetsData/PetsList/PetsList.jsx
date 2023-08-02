import React, { useEffect, useState } from 'react';
import { PetList } from './PetsList.styled';
import PetsItem from '../PetsItem';
import { useSelector } from 'react-redux';
import { selectMyPets } from 'redux/User/selectors';

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
        {petsArr.map(pet => {
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
        })}
      </PetList>
    </>
  );
};

export default PetsList;

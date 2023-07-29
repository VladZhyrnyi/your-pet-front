import React from 'react';
import { PetList } from './PetsList.styled';
import PetsItem from '../PetsItem';

const pets = [
  {
    id: '64c2a24cea13b0d8499f95fd',
    name: 'Masha',
    title: 'This is my lovely pet',
    category: 'my-pet',
    date: '01.01.2020',
    type: 'cat',
    file: 'https://res.cloudinary.com/diyki6u01/image/upload/v1689970227/avatars/64bae55b951756eae2ae23da_ai-generated-g335da1a49_1280.jpg.jpg',
    sex: 'female',
    location: 'Kyiv',
    owner: '64bbedd977975050e6f25117',
  },
  {
    id: '64c2a2ab580aa9565919e2ac',
    name: 'Jack',
    title:
      'This is my lovely pet. This is my lovely pet. This is my lovely pet. This is my lovely pet. This is my lovely pet. This is my lovely pet',
    category: 'my-pet',
    date: '01.01.2020',
    type: 'dog',
    file: 'https://res.cloudinary.com/diyki6u01/image/upload/v1689968532/avatars/64ba9955ceae191d216f53f7_tree-736877_150.jpg.jpg',
    sex: 'female',
    location: 'Kyiv',
    owner: '64bbedd977975050e6f25117',
    createdAt: '2023-07-27T17:00:27.902Z',
    updatedAt: '2023-07-27T17:00:27.902Z',
  },

  {
    id: '64c2b6404871c2193b78a60f',
    name: 'Yuriy',
    title: 'This is my lovely pet',
    category: 'my-pet',
    date: '07.03.2002',
    type: 'dog',
    file: 'https://res.cloudinary.com/diyki6u01/image/upload/v1690462620/petPhotos/64c0e8e7af9f772221396b30_1.jpeg.jpg',
    sex: 'female',
    location: 'Vinnitsya',
    comments: 'ogresivniy dog',
    owner: '64c0e8e7af9f772221396b30',
    createdAt: '2023-07-27T18:24:00.580Z',
    updatedAt: '2023-07-27T18:24:00.580Z',
  },
];

const PetsList = () => {
  return (
    <>
      <PetList>
        {pets.map(pet => {
          const { id, file, name, date, type, title } = pet;
          return (
            <PetsItem
              key={id}
              img={file}
              name={name}
              birth={date}
              type={type}
              comments={title}
            />
          );
        })}
      </PetList>
    </>
  );
};

export default PetsList;

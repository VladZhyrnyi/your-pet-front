import AddPetContent from './AddPetContent';
import { Container } from './AddPerForm.styled';
import { useState } from 'react';
import PersDetails from './YourPetForm/PersDetails';
import PersonalDetails from './SellPetForm/PersonalDetails';
import MoreInfo from './SellPetForm/MoreInfo';

const obj = {
  category: '',
  title: '',
  name: '',
  date: '',
  type: '',
  file: '',
  sex: '',
  location: '',
  price: '',
  comments: '',
};

const AddPetForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(obj);
  const [petTitle, setPetTitle] = useState('Add pet');

  const onChangeOption = ({ target: { name, value } }) => {
    name === 'category' &&
      setData(prev => ({
        ...prev,
        category: value,
      }));

    name === 'sex' &&
      setData(prev => ({
        ...prev,
        sex: value,
      }));
  };

  const onChangeDetails = ({ target: { name, value } }) => {
    name === 'name' &&
      setData(prev => ({
        ...prev,
        name: value,
      }));
    name === 'date' &&
      setData(prev => ({
        ...prev,
        date: value,
      }));
    name === 'type' &&
      setData(prev => ({
        ...prev,
        type: value,
      }));
    name === 'title' &&
      setData(prev => ({
        ...prev,
        title: value,
      }));
    name === 'file' &&
      setData(prev => ({
        ...prev,
        file: value,
      }));
    name === 'location' &&
      setData(prev => ({
        ...prev,
        location: value,
      }));
    name === 'price' &&
      setData(prev => ({
        ...prev,
        price: value,
      }));
    name === 'comments' &&
      setData(prev => ({
        ...prev,
        comments: value,
      }));
  };

  return (
    <Container>
      <h1>{petTitle}</h1>
      <ul>
        <li>
          Choose option
          <div></div>
        </li>
        <li>
          Personal details
          <div></div>
        </li>
        <li>
          More info
          <div></div>
        </li>
      </ul>
      <form>
        {page === 0 && <AddPetContent onChangeOption={onChangeOption} />}
        {page === 1 && data.category === 'your pet' && (
          <PersDetails onChangeDetails={onChangeDetails} />
        )}
        {page === 1 && data.category === 'sell' && (
          <PersonalDetails onChangeDetails={onChangeDetails} />
        )}
        {page === 2 && data.category === 'sell' && (
          <MoreInfo
            onChangeDetails={onChangeDetails}
            onChangeOption={onChangeOption}
          />
        )}
        <button type="button" onClick={() => setPage(prev => prev - 1)}>
          {page === 0 ? 'Cancel' : 'Back'}
        </button>
        <button type="button" onClick={() => setPage(prev => prev + 1)}>
          {page === 2 ? 'Done' : 'Next'}
        </button>
      </form>
    </Container>
  );
};

export default AddPetForm;

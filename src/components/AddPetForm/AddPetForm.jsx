import AddPetContent from './AddPetContent';
import { Container } from './AddPerForm.styled';
import { useState } from 'react';
import PersDetails from './YourPetForm/PersDetails';
import MoreInfo from './YourPetForm/MoreInfo';
import PersDetailsLost from './LostOrFound/PersDetails';
import MoreInfoLost from './LostOrFound/MoreInfo';

const obj = {
  category: '',
  title: '',
  name: '',
  date: '',
  type: '',
  file: '',
  sex: '',
  location: '',
  price: 0,
  comments: '',
};

const AddPetForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(obj);

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

  const onChangeDetails = ({ target: { name, value, file } }) => {
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
  };

  return (
    <Container>
      <h1>Add pet</h1>
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
        {page === 2 && data.category === 'your pet' && (
          <MoreInfo onChangeDetails={onChangeDetails} />
        )}
        {page === 1 && data.category === 'lost/found' && (
          <PersDetailsLost onChangeDetails={onChangeDetails} />
        )}
        {page === 2 && data.category === 'lost/found' && (
          <MoreInfoLost onChangeDetails={onChangeOption} />
        )}
        <button type="button" onClick={() => setPage(prev => prev - 1)}>
          Cancel
        </button>
        <button type="button" onClick={() => setPage(prev => prev + 1)}>
          Next
        </button>
      </form>
    </Container>
  );
};

export default AddPetForm;

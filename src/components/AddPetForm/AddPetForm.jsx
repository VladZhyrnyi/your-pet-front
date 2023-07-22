import AddPetContent from './AddPetContent';
import { Container } from './AddPerForm.styled';
import { useState } from 'react';
import PersDetails from './YourPetForm/PersDetails';

const obj = {
  category: '',
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

  const onChangeOption = ({ target: { value } }) => {
    setData(prev => ({
      ...prev,
      category: value,
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

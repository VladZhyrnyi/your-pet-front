import AddPetContent from './AddPetContent';
import {
  Container,
  OptionItemCurrent,
  OptionItem,
  OptionLine,
  OptionLineCurrent,
  OptionList,
  Title,
  ButtonNext,
  ButtonCancel,
  ButtonContainer,
  Form,
} from './AddPerForm.styled';
import { useState } from 'react';
import PersDetails from './YourPetForm/PersDetails';
import PersonalDetails from './SellPetForm/PersonalDetails';
import MoreInfo from './SellPetForm/MoreInfo';
import MoreInfoPet from './YourPetForm/MoreInfoPet';
import PersDetailsLost from './LostOrFound/PersDetails';
import MoreInfoLost from './LostOrFound/MoreInfo';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

const obj = {
  category: 'your pet',
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

const title = ['Add pet', 'Add pet for sale', 'Add lost pet'];

const AddPetForm = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(obj);

  const onChangeOption = ({ target: { name, value } }) => {
    const key = Object.keys(obj).find(item => item === name);
    name === key &&
      setData(prev => ({
        ...prev,
        [key]: value,
      }));
  };

  const onChangeDetails = ({ target: { name, value, files } }) => {
    const key = Object.keys(obj).find(item => item === name);
    name === key &&
      setData(prev => ({
        ...prev,
        [key]: value,
      }));
    name === 'file' &&
      setData(prev => ({
        ...prev,
        file: files[0].name,
      }));
  };

  return (
    <Container>
      <Title>{title[0]}</Title>
      <OptionList>
        <OptionItemCurrent>
          Choose option
          <OptionLineCurrent />
        </OptionItemCurrent>
        <OptionItem>
          Personal details
          <OptionLine />
        </OptionItem>
        <OptionItem>
          More info
          <OptionLine />
        </OptionItem>
      </OptionList>
      <Form>
        {page === 0 && (
          <AddPetContent onChangeOption={onChangeOption} data={data} />
        )}
        {page === 1 && data.category === 'your pet' && (
          <PersDetails onChangeDetails={onChangeDetails} />
        )}
        {page === 1 && data.category === 'sell' && (
          <PersonalDetails onChangeDetails={onChangeDetails} />
        )}
        {page === 1 && data.category === 'lost/found' && (
          <PersDetailsLost onChangeDetails={onChangeDetails} />
        )}
        {page === 2 && data.category === 'your pet' && (
          <MoreInfoPet onChangeDetails={onChangeDetails} />
        )}
        {page === 2 && data.category === 'sell' && (
          <MoreInfo
            onChangeDetails={onChangeDetails}
            onChangeOption={onChangeOption}
          />
        )}
        {page === 2 && data.category === 'lost/found' && (
          <MoreInfoLost onChangeDetails={onChangeOption} />
        )}
        <ButtonContainer>
          <ButtonNext type="button" onClick={() => setPage(prev => prev + 1)}>
            {page === 2 ? 'Done' : 'Next'}
            <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
          </ButtonNext>
          <ButtonCancel type="button" onClick={() => setPage(prev => prev - 1)}>
            <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
            {page === 0 ? 'Cancel' : 'Back'}
          </ButtonCancel>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default AddPetForm;

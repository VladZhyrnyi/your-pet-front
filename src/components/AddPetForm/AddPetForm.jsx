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
  OptionItemDone,
  OptionLineDone,
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
      {page === 0 && <Title>{title[0]}</Title>}
      {page > 0 && data.category === 'your pet' && <Title>{title[0]}</Title>}
      {page >= 1 && data.category === 'sell' && <Title>{title[1]}</Title>}
      {page >= 1 && data.category === 'lost/found' && <Title>{title[2]}</Title>}
      <OptionList>
        {page === 0 ? (
          <OptionItemCurrent>
            Choose option
            <OptionLineCurrent />
          </OptionItemCurrent>
        ) : (
          <OptionItemDone>
            Choose option
            <OptionLineDone />
          </OptionItemDone>
        )}
        {page === 0 && (
          <OptionItem>
            Personal details
            <OptionLine />
          </OptionItem>
        )}
        {page === 1 && (
          <OptionItemCurrent>
            Personal details
            <OptionLineCurrent />
          </OptionItemCurrent>
        )}
        {page > 1 && (
          <OptionItemDone>
            Personal details
            <OptionLineDone />
          </OptionItemDone>
        )}
        {page < 2 && (
          <OptionItem>
            More info
            <OptionLine />
          </OptionItem>
        )}
        {page === 2 && (
          <OptionItemCurrent>
            More info
            <OptionLineCurrent />
          </OptionItemCurrent>
        )}
      </OptionList>
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
        <MoreInfoLost onChangeDetails={onChangeDetails} data={data} />
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
    </Container>
  );
};

export default AddPetForm;

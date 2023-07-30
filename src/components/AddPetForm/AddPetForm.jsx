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
  MoreInfoContainer,
  MoreInfoTitle,
} from './AddPerForm.styled';
import { useState } from 'react';
import PersDetails from './YourPetForm/PersDetails';
import PersonalDetails from './SellPetForm/PersonalDetails';
import MoreInfo from './SellPetForm/MoreInfo';
import MoreInfoPet from './YourPetForm/MoreInfoPet';
import PersDetailsLost from './LostOrFound/PersDetails';
import MoreInfoLost from './LostOrFound/MoreInfo';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import PersDetailsHands from './InGoodHands/PersDetails';
import MoreInfoHands from './InGoodHands/MoreInfo';

const obj = {
  category: 'my-pet',
  title: '',
  name: '',
  date: '',
  type: '',
  file: null,
  sex: '',
  location: '',
  price: 0,
  comments: '',
};

const title = [
  'Add pet',
  'Add pet for sale',
  'Add lost pet',
  'Add pet in good hands',
];

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
        file: files[0],
      }));
  };

  const handleBack = () => {
    window.history.back();
  };

  return (page === 2 && data.category === 'sell') ||
    (page === 2 && data.category === 'lost-found') ||
    (page === 2 && data.category === 'for-free') ? (
    <MoreInfoContainer>
      {page === 0 && <Title>{title[0]}</Title>}
      {page > 0 && data.category === 'my-pet' && <Title>{title[0]}</Title>}
      {page === 1 && data.category === 'sell' && <Title>{title[1]}</Title>}
      {page > 1 && data.category === 'sell' && (
        <MoreInfoTitle>
          <Title>{title[1]}</Title>
        </MoreInfoTitle>
      )}
      {page === 1 && data.category === 'lost-found' && (
        <Title>{title[2]}</Title>
      )}
      {page > 1 && data.category === 'lost-found' && (
        <MoreInfoTitle>
          <Title>{title[2]}</Title>
        </MoreInfoTitle>
      )}
      {page === 1 && data.category === 'for-free' && <Title>{title[3]}</Title>}
      {page > 1 && data.category === 'for-free' && (
        <MoreInfoTitle>
          <Title>{title[3]}</Title>
        </MoreInfoTitle>
      )}
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
      {page === 1 && data.category === 'my-pet' && (
        <PersDetails
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          setData={setData}
          data={data}
        />
      )}
      {page === 1 && data.category === 'sell' && (
        <PersonalDetails
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 1 && data.category === 'lost-found' && (
        <PersDetailsLost
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 1 && data.category === 'for-free' && (
        <PersDetailsHands
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 2 && data.category === 'my-pet' && (
        <MoreInfoPet
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 2 && data.category === 'sell' && (
        <MoreInfo
          onChangeDetails={onChangeDetails}
          onChangeOption={onChangeOption}
          data={data}
          setPage={setPage}
        />
      )}
      {page === 2 && data.category === 'lost-found' && (
        <MoreInfoLost
          onChangeDetails={onChangeOption}
          data={data}
          setPage={setPage}
        />
      )}
      {page === 2 && data.category === 'for-free' && (
        <MoreInfoHands
          onChangeDetails={onChangeOption}
          data={data}
          setPage={setPage}
        />
      )}
      {page === 0 && (
        <ButtonContainer>
          <ButtonNext type="button" onClick={() => setPage(prev => prev + 1)}>
            Next
            <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
          </ButtonNext>
          <ButtonCancel type="button" onClick={handleBack}>
            <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
            Cancel
          </ButtonCancel>
        </ButtonContainer>
      )}
    </MoreInfoContainer>
  ) : (
    <Container>
      {page === 0 && <Title>{title[0]}</Title>}
      {page > 0 && data.category === 'my-pet' && <Title>{title[0]}</Title>}
      {page >= 1 && data.category === 'sell' && <Title>{title[1]}</Title>}
      {page >= 1 && data.category === 'lost-found' && <Title>{title[2]}</Title>}
      {page >= 1 && data.category === 'for-free' && <Title>{title[3]}</Title>}
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
      {page === 1 && data.category === 'my-pet' && (
        <PersDetails
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 1 && data.category === 'sell' && (
        <PersonalDetails
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 1 && data.category === 'lost-found' && (
        <PersDetailsLost
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 1 && data.category === 'for-free' && (
        <PersDetailsHands
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 2 && data.category === 'my-pet' && (
        <MoreInfoPet
          onChangeDetails={onChangeDetails}
          setPage={setPage}
          data={data}
        />
      )}
      {page === 2 && data.category === 'sell' && (
        <MoreInfo
          onChangeDetails={onChangeDetails}
          onChangeOption={onChangeOption}
          data={data}
          setPage={setPage}
        />
      )}
      {page === 2 && data.category === 'lost-found' && (
        <MoreInfoLost
          onChangeDetails={onChangeOption}
          data={data}
          setPage={setPage}
        />
      )}
      {page === 2 && data.category === 'for-free' && (
        <MoreInfoHands
          onChangeDetails={onChangeOption}
          data={data}
          setPage={setPage}
        />
      )}
      {page === 0 && (
        <ButtonContainer>
          <ButtonNext type="button" onClick={() => setPage(prev => prev + 1)}>
            Next
            <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
          </ButtonNext>
          <ButtonCancel type="button" onClick={handleBack}>
            <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
            Cancel
          </ButtonCancel>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default AddPetForm;

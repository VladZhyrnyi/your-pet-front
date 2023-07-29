import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ButtonCancel,
  ButtonNext,
  FormPersonal,
  Input,
  Label,
  SecondButtonContainer,
} from '../AddPerForm.styled';
import { useState } from 'react';

export const name_validation = {
  name: 'name',
  label: 'Pet s name',
  type: 'text',
  placeholder: 'Type name pet',
  validation: {
    required: {
      value: true,
      message: 'Name is required',
    },
    minLength: {
      value: 2,
      message: '2 characters min',
    },
    maxLength: {
      value: 16,
      message: '16 characters max',
    },
  },
};

const PersDetails = ({ onChangeDetails, setPage, data }) => {
  const [nameErr, setNameErr] = useState(false);
  const [dobErr, setDobErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  const onSubmit = e => {
    e.preventDefault();
    const nameInput = e.currentTarget.elements.name.value;
    const dobInput = e.currentTarget.elements.date.value;
    const petTypeInput = e.currentTarget.elements.type.value;
    nameInput === '' && setNameErr(true);
    dobInput === '' && setDobErr(true);
    petTypeInput === '' && setTypeErr(true);
    formIsInvalid === false && setPage(prev => prev + 1);
  };
  const onFormChange = e => {
    const nameInput = e.currentTarget.elements.name.value;
    const dobInput = e.currentTarget.elements.date.value;
    const petTypeInput = e.currentTarget.elements.type.value;
    nameInput !== '' && setNameErr(false);
    dobInput !== '' && setDobErr(false);
    petTypeInput !== '' && setTypeErr(false);
    nameInput !== '' &&
      dobInput !== '' &&
      petTypeInput !== '' &&
      setFormIsInvalid(false);
  };

  return (
    <>
      <FormPersonal onChange={onFormChange} onSubmit={onSubmit}>
        <Label>
          Pet’s name
          <Input
            onChange={onChangeDetails}
            type="text"
            name="name"
            placeholder="Type name pet"
            value={data.name}
            required={nameErr}
          />
          {nameErr && <span>Enter a pet's name</span>}
        </Label>
        <Label>
          Date of birth
          <Input
            onChange={onChangeDetails}
            type="date"
            name="date"
            placeholder="Type date of birth"
            required={dobErr}
            min="2000-01-01"
            max={new Date()}
          />
          {dobErr && <span>Enter a date of birth</span>}
        </Label>
        <Label>
          Type
          <Input
            onChange={onChangeDetails}
            type="text"
            name="type"
            placeholder="Type of pet"
            value={data.type}
            required={typeErr}
          />
          {typeErr && <span>Enter a type</span>}
        </Label>
        <SecondButtonContainer>
          <ButtonNext type="submit">
            Next
            <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
          </ButtonNext>
          <ButtonCancel type="button" onClick={() => setPage(prev => prev - 1)}>
            <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
            Back
          </ButtonCancel>
        </SecondButtonContainer>
      </FormPersonal>
    </>
  );
};

export default PersDetails;

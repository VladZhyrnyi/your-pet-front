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

const PersDetails = ({ onChangeDetails, setPage, data }) => {
  const [nameErr, setNameErr] = useState(false);
  const [dobErr, setDobErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // +1, так как в JavaScript месяцы начинаются с 0
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const onSubmit = e => {
    e.preventDefault();
    const { name, date, type } = e.currentTarget.elements;
    name.value === '' && setNameErr(true);
    date.value === '' && setDobErr(true);
    type.value === '' && setTypeErr(true);
    formIsInvalid === false && setPage(prev => prev + 1);
  };
  const onFormChange = e => {
    const { name, date, type } = e.currentTarget.elements;
    name.value !== '' && setNameErr(false);
    date.value !== '' && setDobErr(false);
    type.value !== '' && setTypeErr(false);
    name.value !== '' &&
      date.value !== '' &&
      type.value !== '' &&
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
            max={formattedDate}
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

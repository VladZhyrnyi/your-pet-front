import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ButtonCancel,
  ButtonNext,
  FormLostPers,
  Input,
  Label,
  SecondButtonContainer,
} from '../AddPerForm.styled';
import { useState } from 'react';

const PersDetailsLost = ({ onChangeDetails, setPage, data }) => {
  const [titleErr, setTitleErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);

  const onSubmit = e => {
    e.preventDefault();
    const nameInput = e.currentTarget.elements.name.value;
    const titleInput = e.currentTarget.elements.title.value;
    const dobInput = e.currentTarget.elements.date.value;
    const petTypeInput = e.currentTarget.elements.type.value;
    nameInput === '' && setNameErr(true);
    dobInput === '' && setDateErr(true);
    petTypeInput === '' && setTypeErr(true);
    titleInput === '' && setTitleErr(true);
    formIsInvalid === false && setPage(prev => prev + 1);
  };
  const onFormChange = e => {
    const nameInput = e.currentTarget.elements.name.value;
    const dobInput = e.currentTarget.elements.date.value;
    const petTypeInput = e.currentTarget.elements.type.value;
    const titleInput = e.currentTarget.elements.title.value;
    nameInput !== '' && setNameErr(false);
    dobInput !== '' && setDateErr(false);
    petTypeInput !== '' && setTypeErr(false);
    titleInput !== '' && setTitleErr(false);
    nameInput !== '' &&
      dobInput !== '' &&
      petTypeInput !== '' &&
      titleInput !== '' &&
      setFormIsInvalid(false);
  };

  return (
    <>
      <FormLostPers onChange={onFormChange} onSubmit={onSubmit}>
        <Label>
          Title of add
          <Input
            onChange={onChangeDetails}
            type="text"
            name="title"
            placeholder="Title of add"
            value={data.title}
            required={titleErr}
          />
          {titleErr && <span>Enter title</span>}
        </Label>
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
            type="text"
            name="date"
            placeholder="Type date of birth"
            value={data.date}
            required={dateErr}
          />
          {dateErr && <span>Enter a date of birth</span>}
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
      </FormLostPers>
    </>
  );
};

export default PersDetailsLost;

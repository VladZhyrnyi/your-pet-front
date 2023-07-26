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
  const [err, setErr] = useState(null);
  const onSubmit = e => {
    e.preventDefault();
    setPage(prev => prev + 1);
  };
  return (
    <>
      <FormPersonal onSubmit={onSubmit}>
        <Label>
          Pet’s name
          <Input
            onChange={onChangeDetails}
            type="text"
            name="name"
            placeholder="Type name pet"
            value={data.name}
          />
        </Label>
        <Label>
          Date of birth
          <Input
            onChange={onChangeDetails}
            type="text"
            name="date"
            placeholder="Type date of birth"
            value={data.date}
          />
        </Label>
        <Label>
          Type
          <Input
            onChange={onChangeDetails}
            type="text"
            name="type"
            placeholder="Type of pet"
            value={data.type}
          />
        </Label>
        <SecondButtonContainer>
          <ButtonNext type="submit">
            {/* () => setPage(prev => prev + 1) */}
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

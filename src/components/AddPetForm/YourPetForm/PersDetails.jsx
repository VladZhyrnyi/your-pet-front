import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ButtonCancel,
  ButtonNext,
  FormPersonal,
  Input,
  Label,
  SecondButtonContainer,
} from '../AddPerForm.styled';

const PersDetails = ({ onChangeDetails, setPage }) => {
  return (
    <>
      <FormPersonal>
        <Label>
          Pet’s name
          <Input
            onChange={onChangeDetails}
            type="text"
            name="name"
            placeholder="Type name pet"
          />
        </Label>
        <Label>
          Date of birth
          <Input
            onChange={onChangeDetails}
            type="text"
            name="date"
            placeholder="Type date of birth"
          />
        </Label>
        <Label>
          Type
          <Input
            onChange={onChangeDetails}
            type="text"
            name="type"
            placeholder="Type of pet"
          />
        </Label>
      </FormPersonal>
      <SecondButtonContainer>
        <ButtonNext type="button" onClick={() => setPage(prev => prev + 1)}>
          Next
          <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
        </ButtonNext>
        <ButtonCancel type="button" onClick={() => setPage(prev => prev - 1)}>
          <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
          Back
        </ButtonCancel>
      </SecondButtonContainer>
    </>
  );
};

export default PersDetails;

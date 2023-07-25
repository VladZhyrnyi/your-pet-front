import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ButtonCancel,
  SecondButtonContainer,
  ButtonNext,
  FormPersonal,
  Input,
  Label,
} from '../AddPerForm.styled';

const PersonalDetails = ({ onChangeDetails, setPage, data }) => {
  return (
    <>
      <FormPersonal>
        <Label>
          Title of add
          <Input
            onChange={onChangeDetails}
            type="text"
            name="title"
            placeholder="Type title of add"
            value={data.title}
          />
        </Label>
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

export default PersonalDetails;

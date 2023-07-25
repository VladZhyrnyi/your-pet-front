import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ButtonCancel,
  ButtonNext,
  FormLostPers,
  Input,
  Label,
  SecondButtonContainer,
} from '../AddPerForm.styled';

const PersDetailsLost = ({ onChangeDetails, setPage, data }) => {
  return (
    <>
      <FormLostPers>
        <Label>
          Title of add
          <Input
            onChange={onChangeDetails}
            type="text"
            name="title"
            placeholder="Title of add"
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
      </FormLostPers>
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

export default PersDetailsLost;

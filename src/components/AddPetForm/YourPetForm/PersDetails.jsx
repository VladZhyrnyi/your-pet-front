import { FormPersonal, Input, Label } from '../AddPerForm.styled';

const PersDetails = ({ onChangeDetails }) => {
  return (
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
  );
};

export default PersDetails;

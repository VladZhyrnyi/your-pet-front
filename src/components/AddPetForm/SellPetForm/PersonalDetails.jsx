import { FormPersonal, Input, Label } from '../AddPerForm.styled';

const PersonalDetails = ({ onChangeDetails }) => {
  return (
    <FormPersonal>
      <Label>
        Title of add
        <Input
          onChange={onChangeDetails}
          type="text"
          name="title"
          placeholder="Type title of add"
        />
      </Label>
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
          type="date"
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

export default PersonalDetails;

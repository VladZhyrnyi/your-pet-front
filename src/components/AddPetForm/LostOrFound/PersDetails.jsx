import { FormLostPers, Input, Label } from '../AddPerForm.styled';

const PersDetailsLost = ({ onChangeDetails }) => {
  return (
    <FormLostPers>
      <Label>
        Title of add
        <Input
          onChange={onChangeDetails}
          type="text"
          name="title"
          placeholder="Title of add"
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
    </FormLostPers>
  );
};

export default PersDetailsLost;

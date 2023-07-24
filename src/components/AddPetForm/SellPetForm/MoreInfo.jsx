import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { FormPersonal, Label, Input, TextArea } from '../AddPerForm.styled';

const MoreInfo = ({ onChangeDetails, onChangeOption }) => {
  return (
    <FormPersonal>
      <Label>
        Location
        <Input
          onChange={onChangeDetails}
          type="text"
          name="location"
          placeholder="Location pet"
        />
      </Label>
      <Label>
        Price
        <Input
          onChange={onChangeDetails}
          type="text"
          name="price"
          placeholder="Price of pet"
        />
      </Label>
      <Label>
        Comments
        <TextArea
          onChange={onChangeDetails}
          type="text"
          name="comments"
          placeholder="Comments about pet"
        />
      </Label>
    </FormPersonal>
  );
};

export default MoreInfo;

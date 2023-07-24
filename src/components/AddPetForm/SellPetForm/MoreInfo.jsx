import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  FormPersonal,
  SexLabel,
  SexInput,
  RadioWrapper,
  SexWrapper,
  Label,
  Input,
  TextArea,
} from '../AddPerForm.styled';

const MoreInfo = ({ onChangeDetails, onChangeOption }) => {
  return (
    <FormPersonal>
      <p>The sex</p>
      <RadioWrapper>
        <SexLabel htmlFor="Female" />
        <SexWrapper>
          <SpriteIcon icon="female" color="#F43F5E" size="24px" />
          Female
        </SexWrapper>
        <SexInput
          id="Female"
          type="radio"
          name="sex"
          value="female"
          onChange={onChangeOption}
        />
        <SexLabel htmlFor="male" />
        <SexWrapper>
          <SpriteIcon icon="male" color="#54ADFF" size="24px" />
          Male
        </SexWrapper>
        <SexInput
          id="male"
          type="radio"
          name="sex"
          value="male"
          onChange={onChangeOption}
        />
      </RadioWrapper>
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

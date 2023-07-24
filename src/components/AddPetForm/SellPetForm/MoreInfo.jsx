import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  FormPersonal,
  Label,
  Input,
  TextArea,
  SexTitle,
  SexContainer,
  RadioBtnSex,
  RadioLabelSex,
  FileInput,
  FileContainer,
  FileTitle,
  FileLabelLost,
  FileDiv,
  FormLostMore,
} from '../AddPerForm.styled';

const MoreInfo = ({ onChangeDetails, onChangeOption, data }) => {
  return (
    <>
      <SexTitle>The sex</SexTitle>
      <FormLostMore>
        <SexContainer>
          <RadioBtnSex
            id="female"
            onChange={onChangeDetails}
            type="radio"
            name="sex"
            value="female"
          />
          <RadioLabelSex htmlFor="female">
            Female
            <SpriteIcon
              icon="female"
              color={
                (data.sex === 'female' && 'white') ||
                (data.sex === 'male' && '#888') ||
                (data.sex === '' && '#F43F5E')
              }
              size="24px"
            />
          </RadioLabelSex>

          <RadioBtnSex
            id="male"
            onChange={onChangeDetails}
            type="radio"
            name="sex"
            value="male"
          />
          <RadioLabelSex htmlFor="male">
            Male
            <SpriteIcon
              icon="male"
              color={
                (data.sex === 'male' && 'white') ||
                (data.sex === 'female' && '#888') ||
                (data.sex === '' && '#54ADFF')
              }
              size="24px"
            />
          </RadioLabelSex>
        </SexContainer>
        <FileContainer>
          <FileTitle>Load the pet’s image:</FileTitle>
          <FileLabelLost htmlFor="1">
            <FileDiv>
              <SpriteIcon icon="plus" color="#54ADFF" size="36px" />
            </FileDiv>
          </FileLabelLost>
          <FileInput
            id="1"
            onChange={onChangeDetails}
            type="file"
            name="file"
          />
        </FileContainer>
        <Label>
          Location
          <Input
            onChange={onChangeDetails}
            type="text"
            name="location"
            placeholder="Your location"
          />
        </Label>
        <Label>
          Price
          <Input
            onChange={onChangeDetails}
            type="text"
            name="price"
            placeholder="Pet price"
          />
        </Label>
        <Label>
          Comments
          <TextArea
            onChange={onChangeDetails}
            name="comments"
            rows="5"
            placeholder="Stay your comment"
          ></TextArea>
        </Label>
      </FormLostMore>
    </>
  );
};

export default MoreInfo;

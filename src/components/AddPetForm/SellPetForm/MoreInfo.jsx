import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  Label,
  Input,
  TextArea,
  SexTitle,
  SexContainer,
  RadioBtnSex,
  RadioLabelSex,
  FileInput,
  FileContainer,
  FileLabelLost,
  FileDiv,
  FormLostMore,
  FileSellTitle,
  SecondButtonContainer,
  ButtonNext,
  ButtonCancel,
} from '../AddPerForm.styled';

const MoreInfo = ({ onChangeDetails, onChangeOption, data, setPage }) => {
  return (
    <>
      <SexTitle>The sex</SexTitle>
      <FormLostMore>
        <SexContainer>
          <RadioBtnSex
            id="female"
            onChange={onChangeOption}
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
            onChange={onChangeOption}
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
          <FileSellTitle>Load the pet’s image:</FileSellTitle>
          <FileLabelLost htmlFor="avatar">
            <FileDiv>
              <SpriteIcon icon="plus" color="#54ADFF" size="36px" />
            </FileDiv>
          </FileLabelLost>
          <FileInput
            id="avatar"
            onChange={onChangeDetails}
            type="file"
            name="pet foto"
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
      <SecondButtonContainer>
        <ButtonNext type="button" onClick={() => setPage(prev => prev + 1)}>
          Done
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

export default MoreInfo;

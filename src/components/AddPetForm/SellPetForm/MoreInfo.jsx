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
  ThirdButtonContainer,
  ButtonNext,
  ButtonCancel,
  SecondSexContainer,
  LableWrapper,
} from '../AddPerForm.styled';

const MoreInfo = ({ onChangeDetails, onChangeOption, data, setPage }) => {
  return (
    <>
      <FormLostMore>
        <SecondSexContainer>
          <SexTitle>The sex</SexTitle>
          <SexContainer>
            <RadioBtnSex
              id="female"
              onChange={onChangeDetails}
              type="radio"
              name="sex"
              value="female"
              checked={data.sex === 'female'}
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
              checked={data.sex === 'male'}
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
              name="file"
            />
          </FileContainer>
        </SecondSexContainer>
        <LableWrapper>
          <Label>
            Location
            <Input
              onChange={onChangeDetails}
              type="text"
              name="location"
              placeholder="Your location"
              value={data.location}
            />
          </Label>
          <Label>
            Price
            <Input
              onChange={onChangeDetails}
              type="number"
              name="price"
              placeholder="Pet price"
              value={data.price}
            />
          </Label>
          <Label>
            Comments
            <TextArea
              onChange={onChangeDetails}
              name="comments"
              rows="5"
              placeholder="Stay your comment"
              value={data.comments}
            ></TextArea>
          </Label>
        </LableWrapper>
      </FormLostMore>
      <ThirdButtonContainer>
        <ButtonNext type="button" onClick={() => setPage(prev => prev + 1)}>
          Done
          <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
        </ButtonNext>
        <ButtonCancel type="button" onClick={() => setPage(prev => prev - 1)}>
          <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
          Back
        </ButtonCancel>
      </ThirdButtonContainer>
    </>
  );
};

export default MoreInfo;

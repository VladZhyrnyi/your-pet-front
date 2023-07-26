import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  ButtonCancel,
  ButtonNext,
  FileContainer,
  FileDiv,
  FileInput,
  FileLabelLost,
  FileTitle,
  FormLostMore,
  Input,
  Label,
  RadioBtnSex,
  RadioLabelSex,
  ThirdButtonContainer,
  SexContainer,
  SexTitle,
  SecondSexContainer,
  LableWrapper,
  TextAreaLost,
} from '../AddPerForm.styled';

const MoreInfoLost = ({ onChangeDetails, data, setPage }) => {
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
            <FileTitle>Add photo</FileTitle>
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
        </SecondSexContainer>
        <LableWrapper>
          <Label>
            location
            <Input
              onChange={onChangeDetails}
              type="text"
              name="location"
              placeholder="Your location"
              value={data.location}
            />
          </Label>
          <Label>
            Comments
            <TextAreaLost
              onChange={onChangeDetails}
              name="comments"
              rows="5"
              placeholder="Stay your comment"
              value={data.comments}
            ></TextAreaLost>
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

export default MoreInfoLost;

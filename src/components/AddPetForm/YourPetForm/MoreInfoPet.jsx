import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

const {
  FormYourMore,
  FileInput,
  FileLabel,
  FileContainer,
  FileDiv,
  FileTitle,
  Label,
  TextArea,
  ThirdButtonContainer,
  ButtonNext,
  ButtonCancel,
} = require('../AddPerForm.styled');

const MoreInfo = ({ onChangeDetails, setPage, data }) => {
  return (
    <>
      <FormYourMore>
        <FileContainer>
          <FileTitle>Load the pet’s image:</FileTitle>
          <FileLabel htmlFor="1">
            <FileDiv>
              <SpriteIcon icon="plus" color="#54ADFF" size="36px" />
            </FileDiv>
          </FileLabel>
          <FileInput
            id="1"
            onChange={onChangeDetails}
            type="file"
            name="file"
          />
        </FileContainer>
        <Label>
          Comments
          <TextArea
            onChange={onChangeDetails}
            placeholder="Stay your comment"
            name="comments"
            rows="5"
            value={data.comments}
          ></TextArea>
        </Label>
      </FormYourMore>
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

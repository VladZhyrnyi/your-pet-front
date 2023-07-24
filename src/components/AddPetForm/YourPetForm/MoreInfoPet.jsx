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
} = require('../AddPerForm.styled');

const MoreInfo = ({ onChangeDetails }) => {
  return (
    <FormYourMore>
      <FileContainer>
        <FileTitle>Load the pet’s image:</FileTitle>
        <FileLabel htmlFor="1">
          <FileDiv>
            <SpriteIcon icon="plus" color="#54ADFF" size="36px" />
          </FileDiv>
        </FileLabel>
        <FileInput id="1" onChange={onChangeDetails} type="file" name="file" />
      </FileContainer>

      <Label>
        Comments
        <TextArea
          onChange={onChangeDetails}
          placeholder="Stay your comment"
          name="comments"
          rows="5"
        ></TextArea>
      </Label>
    </FormYourMore>
  );
};

export default MoreInfo;

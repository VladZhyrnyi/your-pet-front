import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddPet } from 'redux/Content/operations';
import { selectContacts } from 'redux/Content/selectors';

const {
  FormYourMore,
  FileInput,
  FileLabel,
  FileDiv,
  Label,
  TextArea,
  ThirdButtonContainer,
  ButtonNext,
  ButtonCancel,
  FileTitle,
  FileContainerYour,
} = require('../AddPerForm.styled');

const MoreInfo = ({ onChangeDetails, setPage, data }) => {
  const { success } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  success &&
    setTimeout(() => {
      navigate('/');
    }, 2000);

  const onSubmit = e => {
    e.preventDefault();
    const file = e.currentTarget.elements.file.files[0];
    !file ? setErr(true) : dispatch(AddPet(data));
  };

  const onChange = e => {
    const file = e.currentTarget.elements.file.files[0].name;
    !file && setErr(true);
  };
  return (
    <>
      <FormYourMore onChange={onChange} onSubmit={onSubmit}>
        <FileContainerYour>
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
            required={err}
          />
        </FileContainerYour>
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
        <ThirdButtonContainer>
          <ButtonNext
            style={{ backgroundColor: success && 'green' }}
            type="submit"
          >
            Done
            <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
          </ButtonNext>
          <ButtonCancel type="button" onClick={() => setPage(prev => prev - 1)}>
            <SpriteIcon icon="arrow-left" color="#54ADFF" size="24px" />
            Back
          </ButtonCancel>
        </ThirdButtonContainer>
      </FormYourMore>
    </>
  );
};

export default MoreInfo;

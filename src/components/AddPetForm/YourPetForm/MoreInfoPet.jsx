import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { useEffect, useState } from 'react';
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
  PreviewImage,
} = require('../AddPerForm.styled');

const MoreInfo = ({ onChangeDetails, setPage, data }) => {
  const { success } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();

  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    // free memory
    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);

  success &&
    setTimeout(() => {
      navigate('/user');
    }, 2000);

  const onSubmit = e => {
    e.preventDefault();
    const file = e.currentTarget.elements.file.files[0];
    !file
      ? setErr(true)
      : dispatch(
          AddPet({
            category: data.category,
            name: data.name,
            date: data.date,
            type: data.type,
            file: data.file,
          })
        );
  };

  const onChange = e => {
    const file = e.currentTarget.elements.file.files[0].name;
    !file && setErr(true);
    if (
      e.currentTarget.elements.file.files &&
      e.currentTarget.elements.file.files.length > 0
    ) {
      setFiles(e.currentTarget.elements.file.files);
    }
  };
  return (
    <>
      <FormYourMore onChange={onChange} onSubmit={onSubmit}>
        <FileContainerYour>
          <FileTitle>Load the pet’s image:</FileTitle>
          <FileLabel htmlFor="1">
            <FileDiv>
              {previews ? (
                <PreviewImage
                  style={{
                    backgroundImage: `url(${previews[0]})`,
                  }}
                ></PreviewImage>
              ) : (
                <SpriteIcon icon="plus" color="#54ADFF" size="36px" />
              )}
            </FileDiv>
          </FileLabel>
          <FileInput
            id="1"
            onChange={onChangeDetails}
            type="file"
            name="file"
            required={err}
            accept="image/jpg, image/jpeg, image/png"
            multiple
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
            style={{
              backgroundColor: success && '#00C3AD',
              transition: 'all 500ms linear',
            }}
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

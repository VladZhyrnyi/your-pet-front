import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetSuccess } from 'redux/Content/contentSlice';
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
  const { success, isLoading, notSuc } = useSelector(selectContacts);
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [comErr, setComErr] = useState(false);
  const [filer, setFile] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [files]);

  useEffect(() => {
    return () => {
      dispatch(resetSuccess());
    };
  }, [dispatch]);

  const onSubmit = e => {
    e.preventDefault();
    const { file, comments } = e.currentTarget.elements;
    comments.value === '' && setComErr(true);
    !file.files[0] && !comments.value
      ? setErr(true)
      : dispatch(
          AddPet({
            category: data.category,
            name: data.name,
            date: data.date,
            type: data.type,
            file: filer,
            comments: data.comments,
          })
        );
  };

  const onChange = e => {
    const { file, comments } = e.currentTarget.elements;
    setFile(file.files[0]);
    !file.files[0] && setErr(true);
    comments.value !== '' && setComErr(false);
    if (
      e.currentTarget.elements.file.files &&
      e.currentTarget.elements.file.files.length > 0
    ) {
      setFiles(e.currentTarget.elements.file.files);
    }
  };

  success &&
    setTimeout(() => {
      navigate('/user');
    }, 2000);

  return (
    <>
      <FormYourMore onChange={onChange} onSubmit={onSubmit}>
        <FileContainerYour>
          <FileTitle>Load the pet’s image:</FileTitle>
          <FileInput
            id="1"
            onChange={onChangeDetails}
            type="file"
            name="file"
            required={err}
            accept="image/jpg, image/jpeg, image/png"
          />
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
        </FileContainerYour>
        <Label>
          Comments
          <TextArea
            onChange={onChangeDetails}
            placeholder="Stay your comment"
            name="comments"
            rows="5"
            value={data.comments}
            required={comErr}
          ></TextArea>
          {comErr && <span>Enter commentary</span>}
        </Label>
        <ThirdButtonContainer>
          <ButtonNext
            style={{
              backgroundColor: isLoading
                ? '#a6a6a6'
                : success
                ? '#00C3AD'
                : notSuc && 'red',
              transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            type="submit"
            disabled={isLoading}
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

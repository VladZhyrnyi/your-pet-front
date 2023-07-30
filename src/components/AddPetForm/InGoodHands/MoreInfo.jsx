import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  Label,
  Input,
  SexTitle,
  SexContainer,
  RadioBtnSex,
  RadioLabelSex,
  FileInput,
  FileContainer,
  FileLabelLost,
  FileDiv,
  FormLostMore,
  ThirdButtonContainer,
  ButtonNext,
  ButtonCancel,
  SecondSexContainer,
  LableWrapper,
  PreviewImage,
  TextAreaLost,
  FileTitle,
} from '../AddPerForm.styled';
import { useEffect, useState } from 'react';
import { AddPetOther } from 'redux/Content/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';
import { useNavigate } from 'react-router-dom';
import { resetSuccess } from 'redux/Content/contentSlice';

const MoreInfo = ({ onChangeDetails, onChangeOption, data, setPage }) => {
  const { success, isLoading, notSuc } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [locErr, setLocErr] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);
  const [files, setFiles] = useState();
  const [previews, setPreviews] = useState();
  const [fileErr, setFileErr] = useState(false);
  const [sexErr, setSexErr] = useState(false);
  const [comErr, setComErr] = useState(false);
  const [filer, setFile] = useState();

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

  success &&
    setTimeout(() => {
      navigate('/notices');
    }, 2000);

  const onSubmit = e => {
    e.preventDefault();
    const locInput = e.currentTarget.elements.location.value;
    const sexInput = e.currentTarget.elements.sex.value;
    const comInput = e.currentTarget.elements.comments.value;
    const file = e.currentTarget.elements.file.files[0];
    sexInput === '' && setSexErr(true);
    locInput === '' && setLocErr(true);
    comInput === '' && setComErr(true);
    !file && setFileErr(true);
    sexInput === '' &&
      locInput === '' &&
      comInput === '' &&
      !file &&
      setFormIsInvalid(true);

    formIsInvalid === false &&
      dispatch(
        AddPetOther({
          category: data.category,
          title: data.title,
          name: data.name,
          date: data.date,
          type: data.type,
          file: filer,
          sex: data.sex,
          location: data.location,
          comments: data.comments,
        })
      );
  };
  const onFormChange = e => {
    const locInput = e.currentTarget.elements.location.value;
    const sexInput = e.currentTarget.elements.sex.value;
    const comInput = e.currentTarget.elements.comments.value;
    const file = e.currentTarget.elements.file.files[0];
    setFile(file);
    sexInput !== '' && setSexErr(false);
    locInput !== '' && setLocErr(false);
    comInput !== '' && setComErr(false);
    file && setFileErr(false);
    locInput !== '' &&
      sexInput !== '' &&
      comInput !== '' &&
      file &&
      setFormIsInvalid(false);
    if (
      e.currentTarget.elements.file.files &&
      e.currentTarget.elements.file.files.length > 0
    ) {
      setFiles(e.currentTarget.elements.file.files);
    }
  };

  return (
    <>
      <FormLostMore onChange={onFormChange} onSubmit={onSubmit}>
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
              required={sexErr}
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
              required={sexErr}
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
            <FileTitle>Add photo:</FileTitle>
            <FileInput
              id="avatar"
              onChange={onChangeDetails}
              type="file"
              name="file"
              required={fileErr}
              accept="image/jpg, image/jpeg, image/png"
            />
            <FileLabelLost htmlFor="avatar">
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
            </FileLabelLost>
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
              required={locErr}
            />
            {locErr && <span>Enter location</span>}
          </Label>
          <Label>
            Comments
            <TextAreaLost
              onChange={onChangeDetails}
              name="comments"
              rows="5"
              placeholder="Stay your comment"
              value={data.comments}
              required={comErr}
            ></TextAreaLost>
            {comErr && <span>Enter commentary</span>}
          </Label>
        </LableWrapper>
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
      </FormLostMore>
    </>
  );
};

export default MoreInfo;

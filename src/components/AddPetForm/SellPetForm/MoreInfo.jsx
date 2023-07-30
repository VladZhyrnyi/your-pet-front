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
  PreviewImage,
} from '../AddPerForm.styled';
import { useEffect, useState } from 'react';
import { AddPetOther } from 'redux/Content/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';
import { useNavigate } from 'react-router-dom';
import { resetSuccess } from 'redux/Content/contentSlice';

const MoreInfo = ({ onChangeDetails, onChangeOption, data, setPage }) => {
  let { success, isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [priceErr, setPriceErr] = useState(false);
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
    const priceInput = e.currentTarget.elements.price.value;
    const locInput = e.currentTarget.elements.location.value;
    const sexInput = e.currentTarget.elements.sex.value;
    const comInput = e.currentTarget.elements.comments.value;
    const file = e.currentTarget.elements.file.files[0];
    sexInput === '' && setSexErr(true);
    priceInput === '' && setPriceErr(true);
    locInput === '' && setLocErr(true);
    comInput === '' && setComErr(true);
    !file && setFileErr(true);
    sexInput === '' &&
      priceInput === '' &&
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
          price: data.price,
          comments: data.comments,
        })
      );
  };
  const onFormChange = e => {
    const priceInput = e.currentTarget.elements.price.value;
    const locInput = e.currentTarget.elements.location.value;
    const sexInput = e.currentTarget.elements.sex.value;
    const comInput = e.currentTarget.elements.comments.value;
    const file = e.currentTarget.elements.file.files[0];
    setFile(file);
    sexInput !== '' && setSexErr(false);
    priceInput !== '' && setPriceErr(false);
    locInput !== '' && setLocErr(false);
    comInput !== '' && setComErr(false);
    file && setFileErr(false);
    priceInput !== '' &&
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
            <FileSellTitle>Load the pet’s image:</FileSellTitle>
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
            <FileInput
              id="avatar"
              onChange={onChangeDetails}
              type="file"
              name="file"
              required={fileErr}
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
              required={locErr}
            />
            {locErr && <span>Enter location</span>}
          </Label>
          <Label>
            Price
            <Input
              onChange={onChangeDetails}
              type="number"
              name="price"
              placeholder="Pet price"
              value={data.price}
              required={priceErr}
            />
            {priceErr && <span>Enter price</span>}
          </Label>
          <Label>
            Comments
            <TextArea
              onChange={onChangeDetails}
              name="comments"
              rows="5"
              placeholder="Stay your comment"
              value={data.comments}
              required={comErr}
            ></TextArea>
            {comErr && <span>Enter commentary</span>}
          </Label>
        </LableWrapper>
        <ThirdButtonContainer>
          <ButtonNext
            style={{
              backgroundColor: isLoading ? '#a6a6a6' : success && '#00C3AD',
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

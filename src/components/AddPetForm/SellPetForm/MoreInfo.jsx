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

const MoreInfo = ({ onChangeDetails, onChangeOption, data, setPage }) => {
  const [priceErr, setPriceErr] = useState(false);
  const [locErr, setLocErr] = useState(false);
  const [formIsInvalid, setFormIsInvalid] = useState(true);
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

  const onSubmit = e => {
    e.preventDefault();
    const priceInput = e.currentTarget.elements.price.value;
    const locInput = e.currentTarget.elements.location.value;
    priceInput === '' && setPriceErr(true);
    locInput === '' && setLocErr(true);
    formIsInvalid === false && setPage(prev => prev + 1);
  };
  const onFormChange = e => {
    const priceInput = e.currentTarget.elements.price.value;
    const locInput = e.currentTarget.elements.location.value;
    priceInput !== '' && setPriceErr(false);
    locInput !== '' && setLocErr(false);
    priceInput !== '' && locInput !== '' && setFormIsInvalid(false);
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
                {previews ? (
                  <PreviewImage alt="pet image" src={previews[0]} />
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
            ></TextArea>
          </Label>
        </LableWrapper>
        <ThirdButtonContainer>
          <ButtonNext type="submit">
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

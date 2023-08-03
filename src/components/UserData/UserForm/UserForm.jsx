import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingUser, selectUser } from 'redux/Auth/selectors';
import { updateUser } from 'redux/Auth/operations';
import Loader from 'components/Loader/Loader';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  FormWrap,
  IconChange,
  IconClose,
  ImgWrap,
  Img,
  InputAvatar,
  Form,
  Input,
  Label,
  BtnSave,
  PhotoBtn,
  ChangeAvatarWrap,
  LabelAvatar,
  ConfirmWrap,
  ConfirmButton,
} from './UserForm.styled';
import Logout from '../Logout/Logout';

const UserForm = ({ permis, changeStatus }) => {
  const user = useSelector(selectUser);

  const [formData, setFormData] = useState({
    name: '',
    contactEmail: '',
    phone: '',
    birthday: '',
    city: '',
    avatar: '',
  });
  const [previewImg, setPreviewImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [isImgChange, setIsImgChange] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) return;

    setFormData({ ...user });

    setImgFile();
    setPreviewImg();

    return;
  }, [user]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    dispatch(
      updateUser({
        name: formData.name,
        contactEmail: formData.contactEmail,
        phone: formData.phone,
        birthday: formData.birthday,
        city: formData.city,
        avatar: imgFile,
      })
    );

    changeStatus('Save');

    return;
  };

  const downloadFile = e => {
    const file = e.target.files[0];
    setImgFile(file);
    const tmpUrl = URL.createObjectURL(file);
    setPreviewImg(tmpUrl);
    setIsImgChange(true);
  };

  const canselChangeAvatar = e => {
    e.preventDefault();

    setPreviewImg();
    setImgFile();
    setIsImgChange(false);
  };

  const saveNewAvatar = e => {
    e.preventDefault();

    if (!previewImg) {
      // setError;(true)
      return;
    }

    setFormData(prev => ({
      ...prev,
      avatar: imgFile,
    }));

    setIsImgChange(false);
  };

  const canselChangeForm = e => {
    e.preventDefault();
    setFormData({ ...user });
    setPreviewImg();
    setImgFile();
    setIsImgChange(false);

    changeStatus('Close');
    return;
  };

  const isLoading = useSelector(selectIsLoadingUser);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <FormWrap>
          {permis ? (
            <IconChange type="button" onClick={changeStatus}>
              <SpriteIcon icon="edit" color="currentColor" size="24px" fill />
            </IconChange>
          ) : (
            <IconClose type="button" onClick={canselChangeForm}>
              <SpriteIcon icon="cross" color="currentColor" size="24px" fill />
            </IconClose>
          )}

          <ImgWrap onSubmit={saveNewAvatar}>
            {previewImg ? (
              <Img src={previewImg} alt="preview" width="182" height="182" />
            ) : (
              <Img src={formData.avatar} alt="User" width="182" height="182" />
            )}

            <ChangeAvatarWrap>
              {!permis && !isImgChange && (
                <InputAvatar
                  type="file"
                  name="file"
                  id="fileElem"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={downloadFile}
                />
              )}
              <LabelAvatar htmlFor="fileElem">
                {permis && (
                  <PhotoBtn visibility="visible" type="button">
                    <SpriteIcon
                      icon="camera"
                      color="#54ADFF"
                      size="24px"
                      fill
                    />
                    Edit photo
                  </PhotoBtn>
                )}
                {!permis && isImgChange && (
                  <ConfirmWrap>
                    <ConfirmButton type="submit">
                      <SpriteIcon
                        icon="check"
                        color="#54ADFF"
                        size="24px"
                        fill
                      />
                    </ConfirmButton>
                    <p>Confirm</p>
                    <ConfirmButton type="reset" onClick={canselChangeAvatar}>
                      <SpriteIcon
                        icon="cross"
                        color="#F43F5E"
                        size="24px"
                        fill
                      />
                    </ConfirmButton>
                  </ConfirmWrap>
                )}
                {!permis && !isImgChange && (
                  <PhotoBtn type="button">
                    <SpriteIcon
                      icon="camera"
                      color="#54ADFF"
                      size="24px"
                      fill
                    />
                    Edit photo
                  </PhotoBtn>
                )}
              </LabelAvatar>
            </ChangeAvatarWrap>
          </ImgWrap>
          <Form onSubmit={handleSubmitForm}>
            <Label>
              Name:
              <Input
                type="text"
                disabled={permis}
                name="name"
                placeholder="My name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Email:
              <Input
                type="email"
                disabled={permis}
                name="contactEmail"
                placeholder="mymeil@gmail.com"
                value={formData.contactEmail}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Birthday:
              <Input
                type="date"
                disabled={permis}
                name="birthday"
                placeholder="00.00.0000"
                value={formData.birthday}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              Phone:
              <Input
                type="phone"
                disabled={permis}
                name="phone"
                placeholder="+380000000000"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Label>
            <Label>
              City:
              <Input
                type="text"
                disabled={permis}
                name="city"
                placeholder="Kyiv"
                value={formData.city}
                onChange={handleInputChange}
              />
            </Label>
            {permis ? <Logout /> : <BtnSave type="submit">Save</BtnSave>}
          </Form>
        </FormWrap>
      )}
    </>
  );
};

export default UserForm;

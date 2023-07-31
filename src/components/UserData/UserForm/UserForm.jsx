import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingUser, selectUserData } from 'redux/User/selectors';
import { updateUser } from 'redux/User/operations';
import Loader from 'components/Loader/Loader';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import {
  FormWrap,
  IconChange,
  ImgWrap,
  Img,
  Form,
  Input,
  Label,
  BtnSave,
  PhotoBtn,
} from './UserForm.styled';

const UserForm = ({ permis, changeStatus }) => {
  const user = useSelector(selectUserData);

  const [formData, setFormData] = useState({
    name: '',
    contactEmail: '',
    phone: '',
    birthday: '',
    city: '',
    avatar: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) return;

    setFormData({ ...user });
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
      })
    );
    changeStatus('Save');

    return;
  };

  const isLoading = useSelector(selectIsLoadingUser);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <FormWrap>
          {permis && (
            <IconChange type="button" onClick={changeStatus}>
              <SpriteIcon icon="edit" color="currentColor" size="24px" fill />
            </IconChange>
          )}
          <ImgWrap>
            <Img src={formData.avatar} alt="User" width="182" height="182" />
            {permis ? (
              <PhotoBtn visibility="visible" type="button">
                <SpriteIcon icon="camera" color="#54ADFF" size="24px" fill />
                Edit photo
              </PhotoBtn>
            ) : (
              <PhotoBtn type="button">
                <SpriteIcon icon="camera" color="#54ADFF" size="24px" fill />
                Edit photo
              </PhotoBtn>
            )}
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
            {!permis && <BtnSave type="submit">Save</BtnSave>}
          </Form>
        </FormWrap>
      )}
    </>
  );
};

export default UserForm;

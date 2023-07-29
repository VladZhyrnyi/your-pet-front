import React from 'react';
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

import photo from '../../../images/notfound/error-cat.png';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

const UserForm = ({ permis, changeStatus }) => {
  return (
    <FormWrap>
      {permis && (
        <IconChange type="button" onClick={changeStatus}>
          <SpriteIcon icon="edit" color="currentColor" size="24px" fill />
        </IconChange>
      )}

      <ImgWrap>
        <Img src={photo} alt="User" width="182" height="182" />
        {permis ? (
          <PhotoBtn visible="true" type="button">
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
      <Form>
        <Label>
          Name:
          <Input
            type="text"
            disabled={permis}
            name="name"
            placeholder="My name"
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            disabled={permis}
            name="email"
            placeholder="mymeil@gmail.com"
          />
        </Label>
        <Label>
          Birthday:
          <Input
            type="date"
            disabled={permis}
            name="birthday"
            placeholder="00.00.0000"
          />
        </Label>
        <Label>
          Phone:
          <Input
            type="phone"
            disabled={permis}
            name="phone"
            placeholder="+380000000000"
          />
        </Label>
        <Label>
          City:
          <Input type="text" disabled={permis} name="city" placeholder="Kyiv" />
        </Label>
        {!permis && (
          <BtnSave type="submit" onClick={changeStatus}>
            Save
          </BtnSave>
        )}
      </Form>
    </FormWrap>
  );
};

export default UserForm;

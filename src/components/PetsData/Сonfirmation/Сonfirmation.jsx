import React from 'react';
import { useDispatch } from 'react-redux';
import { removePet } from 'redux/Auth/operations';
import {
  ButtonCancel,
  ButtonDetailWrapper,
  ButtonYes,
  Div,
  IconTrash,
  Message,
  MessageWrapper,
  Span,
  Title,
} from './Сonfirmation.styled';

const Сonfirmation = ({ closeModal, id, name }) => {
  const dispatch = useDispatch();

  const deletePet = id => {
    dispatch(removePet(id));

    closeModal();
  };

  return (
    <MessageWrapper>
      <Title>Delete your pet?</Title>
      <Div>
        <Message>
          Are you sure you want to delete
          <Span> "{name}"</Span>
          from your pet list?
        </Message>
        <Message>You can`t undo this action.</Message>
      </Div>

      <ButtonDetailWrapper>
        <ButtonCancel onClick={() => closeModal()}>Cancel</ButtonCancel>
        <ButtonYes onClick={() => deletePet(id)}>
          Yes
          <IconTrash />
        </ButtonYes>
      </ButtonDetailWrapper>
    </MessageWrapper>
  );
};

export default Сonfirmation;

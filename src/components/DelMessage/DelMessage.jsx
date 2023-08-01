import { useDispatch} from 'react-redux';
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
} from './DelMessageStyled';
import { removeNotice } from 'redux/Content/operations';


const DelMessage = ({ closeModal, id, title }) => {
  const dispatch = useDispatch();

  const deleteNotice = id => {
   dispatch(removeNotice(id));

    closeModal();
  };

  return (
    <MessageWrapper>
      <Title>Delete adverstiment?</Title>
      <Div>
        <Message>
          Are you sure you want to delete
          <Span> "{title}"?</Span>
        </Message>
        <Message>You can`t undo this action.</Message>
      </Div>

      <ButtonDetailWrapper>
        <ButtonCancel onClick={() => closeModal()}>Cancel</ButtonCancel>
        <ButtonYes onClick={() => deleteNotice(id)}>
          Yes
          <IconTrash />
        </ButtonYes>
      </ButtonDetailWrapper>
    </MessageWrapper>
  );
};

export default DelMessage;

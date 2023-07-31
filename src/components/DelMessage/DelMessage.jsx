import { useDispatch, useSelector } from 'react-redux';
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
import { selectContacts } from 'redux/Content/selectors';

const DelMessage = ({ closeModal, id }) => {
  const dispatch = useDispatch();

  // const { items } = useSelector(selectContacts);

  // console.log("items 🚀  => ", items)


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
          <Span> “Cute dog looking for a home”? </Span>
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

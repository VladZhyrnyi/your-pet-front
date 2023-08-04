import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';

import { getNoticesById } from 'redux/Content/operations';
import { addFavorite, removeFavorite } from 'redux/Auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/Auth/selectors';

import Modal from 'components/Modal/Modal';
import Attention from 'components/Attention/Attention';

import {
  Btn,
  ButtonDetailWrapper,
  Comment,
  CommentData,
  DataLink,
  IconFavor,
  IconNotFav,
  Img,
  NameCategory,
  Notice,
  Table,
  TableRow,
  TableUnit,
  TableUnitData,
  ThumbImg,
  Title,
  WrapperCont,
  WrapperContent,
} from './NoticeDetail.styled';
import {
  ButtonCancel,
  ButtonYes,
} from 'components/DelMessage/DelMessageStyled';

import defaultPhoto from '../../images/defaultPhoto.png';

const NoticeDetail = ({ id }) => {
  const [state, setState] = useState(null);
  const [isAttention, setIsAttention] = useState(false);

  const { currentNotice } = useSelector(selectContacts);

  const { favorite } = useSelector(selectUser);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!currentNotice) {
      return;
    }
    setState(currentNotice);
  }, [currentNotice]);

  const isFavorite = favorite.includes(id);

  const handleFavorite = async id => {
    if (isLoggedIn) {
      setIsAttention(false);
      isFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id));
      return;
    }
    setIsAttention(true);
  };

  return (
    <>
      {state !== null && (
        <Notice>
          <WrapperContent>
            <ThumbImg>
              <Img
                src={
                  currentNotice.notice?.file
                    ? currentNotice.notice.file
                    : defaultPhoto
                }
                alt={currentNotice.notice.type}
              />
              {currentNotice.notice.category === 'for-free' && (
                <NameCategory>in good hands</NameCategory>
              )}

              {currentNotice.notice.category === 'lost-found' && (
                <NameCategory>lost/found</NameCategory>
              )}

              {currentNotice.notice.category === 'sell' && (
                <NameCategory>{currentNotice.notice.category}</NameCategory>
              )}
            </ThumbImg>
            <WrapperCont>
              <Title>{currentNotice.notice.title}</Title>
              <Table>
                <tbody>
                  <TableRow>
                    <TableUnit>Name:</TableUnit>
                    <TableUnitData>{currentNotice.notice.name}</TableUnitData>
                  </TableRow>
                  <TableRow>
                    <TableUnit>Birthday:</TableUnit>
                    <TableUnitData>{currentNotice.notice.date}</TableUnitData>
                  </TableRow>
                  <TableRow>
                    <TableUnit>Type:</TableUnit>
                    <TableUnitData>{currentNotice.notice.type}</TableUnitData>
                  </TableRow>
                  <TableRow>
                    <TableUnit>Place:</TableUnit>
                    <TableUnitData>
                      {currentNotice.notice.location}
                    </TableUnitData>
                  </TableRow>
                  <TableRow>
                    <TableUnit>The sex:</TableUnit>
                    <TableUnitData>{currentNotice.notice.sex}</TableUnitData>
                  </TableRow>
                  {currentNotice.notice.category === 'sell' && (
                    <TableRow>
                      <TableUnit>Price:</TableUnit>
                      <TableUnitData>
                        {currentNotice.notice.price} UAH
                      </TableUnitData>
                    </TableRow>
                  )}
                  <TableRow>
                    <TableUnit>Email:</TableUnit>
                    <TableUnitData>
                      <DataLink
                        href={
                          currentNotice.notice?.owner?.contactEmail
                            ? `mailto:${currentNotice.notice.owner.contactEmail}`
                            : '*'
                        }
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        {currentNotice.notice.owner.contactEmail
                          ? `${currentNotice.notice.owner.contactEmail}`
                          : 'email@email.com'}
                      </DataLink>
                    </TableUnitData>
                  </TableRow>
                  <TableRow>
                    <TableUnit>Phone:</TableUnit>
                    <TableUnitData>
                      <DataLink
                        href={`tel:${currentNotice.notice.owner.phone}`}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        {currentNotice.notice.owner.phone}
                      </DataLink>
                    </TableUnitData>
                  </TableRow>
                </tbody>
              </Table>
            </WrapperCont>
          </WrapperContent>
          {currentNotice.notice.comments === undefined ? (
            <CommentData>
              <Comment> No comments</Comment>
            </CommentData>
          ) : (
            <CommentData>
              <Comment>Comments:</Comment>
              {currentNotice.notice.comments}
            </CommentData>
          )}

          <ButtonDetailWrapper>
            {isFavorite ? (
              <ButtonYes onClick={() => handleFavorite(id)}>
                Remove from
                <IconFavor />
              </ButtonYes>
            ) : (
              <ButtonYes onClick={() => handleFavorite(id)}>
                Add to
                <IconNotFav />
              </ButtonYes>
            )}

            <ButtonCancel
              as={Btn}
              href={`mailto:${currentNotice.notice.owner.contactEmail}`}
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              Contact
            </ButtonCancel>
          </ButtonDetailWrapper>
        </Notice>
      )}
      {isAttention && (
        <Modal closeModal={() => setIsAttention(false)}>
          <Attention />
        </Modal>
      )}
    </>
  );
};

export default NoticeDetail;

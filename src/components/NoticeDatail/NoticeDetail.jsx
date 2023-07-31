import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Content/selectors';

import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { getNoticesById } from 'redux/Content/operations';

import {
  ButtonDetail,
  ButtonDetailWrapper,
  Comment,
  CommentData,
  DataLink,
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
import { theme } from '../../theme.js';
import { Link } from 'react-router-dom';

const NoticeDetail = ({ id }) => {
  const [state, setState] = useState(null);

  const { currentNotice } = useSelector(selectContacts);

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

  return (
    <>
      {state !== null && (
        <Notice>
          <WrapperContent>
            <ThumbImg>
              <Img
                src={currentNotice.notice.file}
                alt={currentNotice.notice.type}
              />
              {currentNotice.notice.category === 'for-free' ? (
                <NameCategory>in good hands</NameCategory>
              ) : (
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
                  {currentNotice.notice.price !== 0 && (
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
                        href={`mailto:${currentNotice.notice.owner.contactEmail}`}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        {currentNotice.notice.owner.contactEmail}
                      </DataLink>
                    </TableUnitData>
                  </TableRow>
                  <TableRow>
                    <TableUnit>Phone:</TableUnit>
                    <TableUnitData>
                      <DataLink
                        href={`tel:${currentNotice.phone}`}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        {currentNotice.phone}
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
            <ButtonDetail
              background={theme.colors.blue}
              color={theme.colors.white}
              width="130px"
            >
              Add to
              <SpriteIcon icon="heart" color={theme.colors.white}></SpriteIcon>
            </ButtonDetail>
            <ButtonDetail
              as="a"
              href={`mailto:${currentNotice.notice.owner.contactEmail}`}
              target="_blank"
              rel="noreferrer noopener nofollow"
              background={theme.colors.white}
              color={theme.colors.blue}
              width="129px"
              
            >
              Contact
            </ButtonDetail>
          </ButtonDetailWrapper>
        </Notice>
      )}
    </>
  );
};

export default NoticeDetail;

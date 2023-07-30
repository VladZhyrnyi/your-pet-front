import React from 'react';
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
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { theme } from '../../theme.js';
import { users } from '../NoticeCategoryItem/users.js';

const NoticeDetail = ({ el }) => {
  const {
    date,
    file,
    type,
    category,
    location,
    sex,
    title,
    price,
    name,
    comments,
  } = el;

  const user = users[0];

  return (
    <Notice>
      <WrapperContent>
        <ThumbImg>
          <Img src={file} alt={type} />
          <NameCategory>{category}</NameCategory>
        </ThumbImg>
        <WrapperCont>
          <Title>{title}</Title>
          <Table>
            <tbody>
              <TableRow>
                <TableUnit>Name:</TableUnit>
                <TableUnitData>{name}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Birthday:</TableUnit>
                <TableUnitData>{date}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Type:</TableUnit>
                <TableUnitData>{type}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Place:</TableUnit>
                <TableUnitData>{location}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>The sex:</TableUnit>
                <TableUnitData>{sex}</TableUnitData>
              </TableRow>
              {price !== 0 && (
                <TableRow>
                  <TableUnit>Price:</TableUnit>
                  <TableUnitData>{price} UAH</TableUnitData>
                </TableRow>
              )}
              <TableRow>
                <TableUnit>Email:</TableUnit>
                <TableUnitData>
                  <DataLink
                    href={`mailto:${user.contactEmail}`}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {user.contactEmail}
                  </DataLink>
                </TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Phone:</TableUnit>
                <TableUnitData>
                  <DataLink
                    href={`tel:${user.phone}`}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {user.phone}
                  </DataLink>
                </TableUnitData>
              </TableRow>
            </tbody>
          </Table>
        </WrapperCont>
      </WrapperContent>
      {comments === undefined ? (
        <CommentData>
          <Comment> No comments</Comment>
        </CommentData>
      ) : (
        <CommentData>
          <Comment>Comments:</Comment>
          {comments}
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
          background={theme.colors.white}
          color={theme.colors.blue}
          width="129px"
        >
          Contact
        </ButtonDetail>
      </ButtonDetailWrapper>
    </Notice>
  );
};

export default NoticeDetail;

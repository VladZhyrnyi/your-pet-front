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
import img from '../NoticeCategoryItem/Rectangle.jpg';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { theme } from '../../theme.js';
import { notices } from '../NoticeCategoryItem/notices.js';
import { users } from '../NoticeCategoryItem/users.js';

const NoticeDetail = () => {
  const notice = notices[0];
  // console.log('notice- ', notice.price);

  const user = users[0];
  // console.log('user- ', user);

  return (
    <Notice>
      <WrapperContent>
        <ThumbImg>
          <Img src={notice.file} alt={notice.type} />
          <NameCategory>{notice.category}</NameCategory>
        </ThumbImg>
        <WrapperCont>
          <Title>{notice.title}</Title>
          <Table>
            <tbody>
              <TableRow>
                <TableUnit>Name:</TableUnit>
                <TableUnitData>{notice.name}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Birthday:</TableUnit>
                <TableUnitData>{notice.date}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Type:</TableUnit>
                <TableUnitData>{notice.type}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Place:</TableUnit>
                <TableUnitData>{notice.location}</TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>The sex:</TableUnit>
                <TableUnitData>{notice.sex}</TableUnitData>
              </TableRow>
              {notice.price !== 0 && (
                <TableRow>
                  <TableUnit>Price:</TableUnit>
                  <TableUnitData>{notice.price} UAH</TableUnitData>
                </TableRow>
              )}
              <TableRow>
                <TableUnit>Email:</TableUnit>
                <TableUnitData>
                  <DataLink
                    href={`mailto:${user.email}`}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {user.email}
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
      <CommentData>
        <Comment>Comments:</Comment>Rich would be the perfect addition to an
        active family that loves to play and go on walks. I bet he would love
        having a doggy playmate too!
      </CommentData>
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

import React from 'react';
import {
  ButtonDetail,
  ButtonDetailWrapper,
  Comment,
  CommentData,
  Img,
  NameCategory,
  Notice,
  Table,
  TableRow,
  TableUnit,
  TableUnitData,
  ThumbImg,
  Title,
} from './NoticeDetail.styled';
import img from '../NoticeCategoryItem/Rectangle.jpg';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

const NoticeDetail = () => {
  return (
    <Notice>
      <ThumbImg>
        <Img src={img} alt="picture" />
        <NameCategory>In good hands</NameCategory>
      </ThumbImg>
      <Title>Сute dog looking for a home</Title>
      <Table>
        <tbody>
          <TableRow>
            <TableUnit>Name:</TableUnit>
            <TableUnitData>Rich</TableUnitData>
          </TableRow>
          <TableRow>
            <TableUnit>Birthday:</TableUnit>
            <TableUnitData>21.09.2020</TableUnitData>
          </TableRow>
          <TableRow>
            <TableUnit>Type:</TableUnit>
            <TableUnitData>Pomeranian</TableUnitData>
          </TableRow>
          <TableRow>
            <TableUnit>Place:</TableUnit>
            <TableUnitData>Lviv</TableUnitData>
          </TableRow>
          <TableRow>
            <TableUnit>The sex:</TableUnit>
            <TableUnitData>male</TableUnitData>
          </TableRow>
          <TableRow>
            <TableUnit>Email:</TableUnit>
            <TableUnitData>user@mail.com</TableUnitData>
          </TableRow>
          <TableRow>
            <TableUnit>Phone:</TableUnit>
            <TableUnitData>+380971234567</TableUnitData>
          </TableRow>
        </tbody>
      </Table>
      <CommentData>
        <Comment>Comments:</Comment>Rich would be the perfect addition to an
        active family that loves to play and go on walks. I bet he would love
        having a doggy playmate too!
      </CommentData>
      <ButtonDetailWrapper>
        <ButtonDetail
          background={p => p.theme.colors.blue}
          color={p => p.theme.colors.white}
          width="130px"
        >
          Add to
          <SpriteIcon icon="heart" color="#FFFFFF"></SpriteIcon>
        </ButtonDetail>
        <ButtonDetail
          background={p => p.theme.colors.white}
          color={p => p.theme.colors.blue}
          width="129px"
        >
          Contact
        </ButtonDetail>
      </ButtonDetailWrapper>
    </Notice>
  );
};

export default NoticeDetail;

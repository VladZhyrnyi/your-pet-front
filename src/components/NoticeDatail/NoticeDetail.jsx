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
import {theme} from "../../theme.js"

const NoticeDetail = () => {
  return (
    <Notice>
      <WrapperContent>
        <ThumbImg>
          <Img src={img} alt="picture" />
          <NameCategory>In good hands</NameCategory>
        </ThumbImg>
        <WrapperCont>
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
                <TableUnitData>
                  <DataLink href="mailto:user@mail.com">user@mail.com</DataLink>
                </TableUnitData>
              </TableRow>
              <TableRow>
                <TableUnit>Phone:</TableUnit>
                <TableUnitData>
                  <DataLink href="tel:+380971234567">+380971234567</DataLink>
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

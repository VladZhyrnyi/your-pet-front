import React from 'react';
import {
  ButtonHeart,
  Card,
  Container,
  Img,
  NameCategory,
  ThumbImg,
  Title,
  WrapperBtn,
  WrapperContent,
} from './NoticeCategoryItem.styled';
import {
  ButtonAge,
  ButtonLocation,
  ButtonSex,
  ButtonWhiteBig,
} from 'components/Buttons';
import img from './Rectangle.jpg';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { theme } from 'theme';

const NoticeCategoryItem = () => {
  return (
    <Container>
      <Card>
        <ThumbImg>
          <Img src={img} alt="picture" />
          <NameCategory>In good hands</NameCategory>
          <ButtonHeart
            background={theme.colors.blueLight}
            color={theme.colors.blue}
          >
            <SpriteIcon
              icon="heart"
              color={theme.colors.blue}
              fill
            ></SpriteIcon>
          </ButtonHeart>
          <WrapperBtn>
            <ButtonLocation />
            <ButtonAge />
            <ButtonSex />
          </WrapperBtn>
        </ThumbImg>
        <WrapperContent>
          <Title>Сute dog looking for a home</Title>
          <ButtonWhiteBig />
        </WrapperContent>
      </Card>
    </Container>
  );
};

export default NoticeCategoryItem;

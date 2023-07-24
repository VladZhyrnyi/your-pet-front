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

const NoticeCategoryItem = () => {
  return (
    <Container>
      <Card>
        <ThumbImg>
          <Img src={img} alt="picture" />
          <NameCategory>In good hands</NameCategory>
          <ButtonHeart
            background={p => p.theme.colors.blueLight}
            color={p => p.theme.colors.blue}
          >
            <SpriteIcon icon="heart" color="#54ADFF" fill></SpriteIcon>
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

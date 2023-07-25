import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonFilter,
  ButtonFilterWrapper,
  ButtonWrapper,
  Container,
  Div,
} from './NoticesCategoriesNav.styled';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { ButtonAddPet } from 'components/Buttons';
import { theme } from '../../theme.js';

const NoticesCategoriesNav = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log(viewportWidth);
  return (
    <Container>
      <ButtonWrapper>
        <Button>sell</Button>
        <Button>lost/found</Button>
        <Button>in good hands</Button>
        <Button>favorite ads</Button>
        <Button>my ads</Button>
      </ButtonWrapper>
      <ButtonFilterWrapper>
        {viewportWidth >= 768 && (
          <>
            <ButtonFilter
              background={theme.colors.white}
              color={theme.colors.blue}
              width="152px"
            >
              Filter
              <SpriteIcon
                icon="filters-2"
                color={theme.colors.blue}
              ></SpriteIcon>
            </ButtonFilter>
            <ButtonFilter
              background={theme.colors.blue}
              color={theme.colors.white}
              width="129px"
            >
              Add Pet
              <SpriteIcon
                icon="plus-small"
                color={theme.colors.white}
              ></SpriteIcon>
            </ButtonFilter>
          </>
        )}
        {viewportWidth < 768 && (
          <>
            <ButtonFilter
              background={theme.colors.blueLight}
              color={theme.colors.blue}
              width="40px"
            >
              <SpriteIcon
                icon="filters-2"
                color={theme.colors.blue}
              ></SpriteIcon>
            </ButtonFilter>
            <Div>
              <ButtonAddPet></ButtonAddPet>
            </Div>
          </>
        )}
      </ButtonFilterWrapper>
    </Container>
  );
};

export default NoticesCategoriesNav;

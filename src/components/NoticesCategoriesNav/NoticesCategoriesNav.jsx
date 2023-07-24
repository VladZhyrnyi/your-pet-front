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

  console.log(viewportWidth);
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
              background={p => p.theme.colors.white}
              color={p => p.theme.colors.blue}
              width="152px"
            >
              Filter
              <SpriteIcon icon="filters-2" color="#54ADFF"></SpriteIcon>
            </ButtonFilter>
            <ButtonFilter
              background={p => p.theme.colors.blue}
              color={p => p.theme.colors.white}
              width="129px"
            >
              Add Pet
              <SpriteIcon icon="plus-small" color="#FFFFFF"></SpriteIcon>
            </ButtonFilter>
          </>
        )}
        {viewportWidth < 768 && (
          <>
            <ButtonFilter
              background={p => p.theme.colors.blueLight}
              color={p => p.theme.colors.blue}
              width="40px"
            >
              <SpriteIcon icon="filters-2" color="#54ADFF"></SpriteIcon>
            </ButtonFilter>
            <Div>
              {/* <ButtonFilter
                background="linear-gradient(315deg, #419ef1, #9bd0ff)"
                color="#FFFFFF"
                width="80px"
              >
                Add Pet
                <SpriteIcon icon="plus" color="#FFFFFF"></SpriteIcon>
              </ButtonFilter> */}
              <ButtonAddPet></ButtonAddPet>
            </Div>
          </>
        )}
      </ButtonFilterWrapper>
    </Container>
  );
};

export default NoticesCategoriesNav;

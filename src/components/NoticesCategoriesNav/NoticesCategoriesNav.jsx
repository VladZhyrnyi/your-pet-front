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
            <ButtonFilter background="#FEF9F9" color="#54ADFF" width="152px">
              Filter
              <SpriteIcon icon="filters-2" color="#54ADFF"></SpriteIcon>
            </ButtonFilter>
            <ButtonFilter background="#54ADFF" color="#FEF9F9" width="129px">
              Add Pet
              <SpriteIcon icon="plus-small" color="#FEF9F9"></SpriteIcon>
            </ButtonFilter>
          </>
        )}
        {viewportWidth < 768 && (
          <>
            <ButtonFilter background="#C5DFF6" color="#54ADFF" width="40px">
              <SpriteIcon icon="filters-2" color="#54ADFF"></SpriteIcon>
            </ButtonFilter>
            <Div>
              {/* <ButtonFilter
                background="linear-gradient(315deg, #419ef1, #9bd0ff)"
                color="#FEF9F9"
                width="80px"
              >
                Add Pet
                <SpriteIcon icon="plus" color="#FEF9F9"></SpriteIcon>
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

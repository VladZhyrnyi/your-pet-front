import React, { useEffect, useState } from 'react';
import {
  ButtonFilterWrapper,
  ButtonNoticeFilter,
  ButtonWrapper,
  Container,
  Div,
  Filter,
  NoticesLink,
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
        <NoticesLink to={'/notices/sell1'}>sell</NoticesLink>
        <NoticesLink to={'/notices/sell2'}>lost/found</NoticesLink>
        <NoticesLink to={'/notices/sell3'}>in good hands</NoticesLink>
        <NoticesLink to={'/notices/sell4'}>favorite ads</NoticesLink>
        <NoticesLink to={'/notices/sell5'}>my ads</NoticesLink>
      </ButtonWrapper>
      <ButtonFilterWrapper>
        {/* {viewportWidth >= 768 && (
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
        )} */}
        {viewportWidth < 768 && (
          <>
            <ButtonNoticeFilter>
              <Filter />
            </ButtonNoticeFilter>
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

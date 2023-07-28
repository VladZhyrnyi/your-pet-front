import React, { useEffect, useState } from 'react';
import {
  ButtonFilterWrapper,
  ButtonNoticeAdd,
  ButtonNoticeFilter,
  ButtonWrapper,
  ContainerNav,
  Div,
  IconAdd,
  IconFilter,
  NoticesLink,
} from './NoticesCategoriesNav.styled';
import { ButtonAddPet } from 'components/Buttons';
// import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
// import { theme } from '../../theme.js';

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
    <ContainerNav>
      <ButtonWrapper>
        <NoticesLink to={'/notices/cell'}>sell</NoticesLink>
        <NoticesLink to={'/notices//lost-found'}>lost/found</NoticesLink>
        <NoticesLink to={'/notices/for-free'}>in good hands</NoticesLink>
        <NoticesLink to={'/notices/favorite '}>favorite ads</NoticesLink>
        <NoticesLink to={'/notices/own '}>my ads</NoticesLink>
      </ButtonWrapper>
      <ButtonFilterWrapper>
        {viewportWidth >= 768 && (
          <>
            <ButtonNoticeFilter>
              Filter <IconFilter />
            </ButtonNoticeFilter>
            <ButtonNoticeAdd>
              Add Pet <IconAdd />
            </ButtonNoticeAdd>
          </>
        )}
        {viewportWidth < 768 && (
          <>
            <ButtonNoticeFilter>
              <IconFilter />
            </ButtonNoticeFilter>
            <Div>
              <ButtonAddPet>
                <IconAdd />
                Add pet
              </ButtonAddPet>
            </Div>
          </>
        )}
      </ButtonFilterWrapper>
    </ContainerNav>
  );
};

export default NoticesCategoriesNav;

import {
  ButtonWrapper,
  NoticesLink,
} from './NoticesCategoriesNav.styled';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/selectors';
import { NavLink } from 'react-router-dom';
// import { theme } from '../../theme.js';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ButtonWrapper>
      <NoticesLink as={NavLink} to={'/notices/sell'}>
        sell
      </NoticesLink>
      <NoticesLink as={NavLink} to={'/notices/lost-found'}>
        lost/found
      </NoticesLink>
      <NoticesLink as={NavLink} to={'/notices/in-good-hands'}>
        in good hands
      </NoticesLink>
      {isLoggedIn && (
        <>
          <NoticesLink as={NavLink} to={'/notices/favorite'}>
            favorite ads
          </NoticesLink>
          <NoticesLink as={NavLink} to={'/notices/own'}>
            my ads
          </NoticesLink>
        </>
      )}
    </ButtonWrapper>
  );
};

export default NoticesCategoriesNav;

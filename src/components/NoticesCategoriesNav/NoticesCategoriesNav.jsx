import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/Auth/selectors';

import NoticesFilters from 'components/NoticesFilters';
import {
  ContainerNav,
  NavLinkWrapper,
  NoticesLink,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContainerNav>
      <NavLinkWrapper>
        <NoticesLink to={'/notices/sell'}>sell</NoticesLink>
        <NoticesLink to={'/notices/lost-found'}>lost/found</NoticesLink>
        <NoticesLink to={'/notices/for-free'}>in good hands</NoticesLink>
        {isLoggedIn && (
          <>
            <NoticesLink to={'/notices/favorite'}>favorite ads</NoticesLink>
            <NoticesLink to={'/notices/own'}>my ads</NoticesLink>
          </>
        )}
      </NavLinkWrapper>

      <NoticesFilters />
    </ContainerNav>
  );
};

export default NoticesCategoriesNav;

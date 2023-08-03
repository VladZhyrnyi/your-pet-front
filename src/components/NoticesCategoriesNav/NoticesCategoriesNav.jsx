
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/Auth/selectors';

import NoticesFilters from 'components/NoticesFilters';
import {
  ContainerNav,
  NavLinkWrapper,
  NoticesLink,
} from './NoticesCategoriesNav.styled';
import { useSearchParams } from 'react-router-dom';

const NoticesCategoriesNav = () => {
  const [searchParams] = useSearchParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const queryParams = searchParams.get('query')? `?query=${searchParams.get('query')}` : '';

  return (
    <ContainerNav>
      <NavLinkWrapper>
        <NoticesLink to={`/notices/sell${queryParams}`}>sell</NoticesLink>
        <NoticesLink to={`/notices/lost-found${queryParams}`}>
          lost/found
        </NoticesLink>
        <NoticesLink to={`/notices/for-free${queryParams}`}>
          in good hands
        </NoticesLink>
        {isLoggedIn && (
          <>
            <NoticesLink to={`/notices/favorite${queryParams}`}>
              favorite ads
            </NoticesLink>
            <NoticesLink to={`/notices/own${queryParams}`}>my ads</NoticesLink>
          </>
        )}
      </NavLinkWrapper>

      <NoticesFilters />
    </ContainerNav>
  );
};

export default NoticesCategoriesNav;

// import authSelectors from 'store/auth/auth-selectors';

import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { NavLink } from 'react-router-dom';
import { ButtonLogout, Title, UserContainer, UserNavContainer } from './UserNav.styled';
import { theme } from 'theme';

export const UserNav = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const name = useSelector(authSelectors.getUserName);

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   dispatch(logOut())
  //     .unwrap()
  //     .then(() => navigate('/'));
  // };

  return (
    <UserNavContainer>
      <NavLink to="/main" exact="true">
        <ButtonLogout
        // onClick={handleSubmit}
        >
          LogOUT
          <SpriteIcon icon="logout" color={theme.colors.white} />
        </ButtonLogout>
      </NavLink>

      <NavLink to="/user" exact="true">
        <UserContainer>
          <SpriteIcon icon="user" color={theme.colors.yellow} />
          <Title>Anna</Title>
        </UserContainer>
      </NavLink>
    </UserNavContainer>
  );
};

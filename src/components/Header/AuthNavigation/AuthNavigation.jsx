import { Link } from 'react-router-dom';

import SpriteIcon from 'components/SpriteIcon/';

import { ButtonPrimary, ButtonSecondary } from './AuthNavigation.styled';

function AuthNavigation() {
  return (
    <>
      <ButtonSecondary as={Link} to="/login">
        Log IN
        <SpriteIcon icon="pawprint" />
      </ButtonSecondary>
      <ButtonPrimary as={Link} to="/register">
        Registration
      </ButtonPrimary>
    </>
  );
}

export default AuthNavigation;

import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import SpriteIcon from 'components/SpriteIcon';

import { selectIsLoggedIn, selectUser } from 'redux/Auth/selectors';

function AuthBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div>
      {user && (
        <>
          {isLoggedIn ? (
            <>
              <SpriteIcon icon="user" />
              <Link to="/user">{user.name}</Link>
            </>
          ) : (
            <>
              <Link to="/login">
                Log IN
                <SpriteIcon icon="pawprint" />
              </Link>
              <Link to="/register">Registration</Link>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default AuthBar;

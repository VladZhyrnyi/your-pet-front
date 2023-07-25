import * as React from 'react';
import { Nav } from './Navigation/Nav';
import { NavPage } from './NavPage';
import Logo from './Logo';

import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import { Button, HeaderContainer } from './Header.styled';
import { Modal } from 'components/Modal';
// import { useState } from 'react';

export const Header = props => {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(prevState => !prevState);
  // };

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <HeaderContainer>
      <Logo />
      {/* <div> */}
         {/* icon{' '} 
        <SpriteIcon
          icon="icon-menu-burger"
          color={p => p.theme.colors.yellow}
        /> 
         <Modal>
          <Button>
            {' '}
            <SpriteIcon
              icon="icon-cross-small"
              color={p => p.theme.colors.blue}
            />{' '}
          </Button>
          <NavPage />

          <Nav />
        </Modal>  */}
      {/* </div> */}
      {/* <div> */}
        <NavPage />

        <Nav />
      {/* </div> */}
    </HeaderContainer>
  );
};

// DrawerAppBar.propTypes = {
//   window: PropTypes.func,
// };

export default Header;

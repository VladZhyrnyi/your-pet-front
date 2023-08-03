import SpriteIcon from 'components/SpriteIcon/SpriteIcon';
import React from 'react';
import { styled } from 'styled-components';
import { theme } from 'theme';

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  transition: transform  250ms linear;

  
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

const MenuBtn = ({ isOpen, onClick }) => {
  return (
    <MenuButton onClick={onClick}>
      {isOpen ? (
        <SpriteIcon icon="cross" size='24px' color={theme.colors.yellow} />
      ) : (
        <SpriteIcon icon="menu-burger" size='24px' color={theme.colors.yellow} />
      )}
    </MenuButton>
  );
};

export default MenuBtn;

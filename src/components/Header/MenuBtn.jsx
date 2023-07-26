import SpriteIcon from 'components/SpriteIcon/SpriteIcon'
import React from 'react'
import { styled } from 'styled-components'

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
`

const MenuBtn = ({isOpen, onClick}) => {

  return (
    <MenuButton onClick={onClick}>
      {isOpen ? <SpriteIcon icon='cross-small' /> : <SpriteIcon icon='menu-burger'/>}
    </MenuButton>
  )
}

export default MenuBtn

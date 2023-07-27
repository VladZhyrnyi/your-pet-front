import SpriteIcon from 'components/SpriteIcon/SpriteIcon'
import React from 'react'
import { styled } from 'styled-components'
import { theme } from 'theme'

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
`

const MenuBtn = ({isOpen, onClick}) => {

  return (
    <MenuButton onClick={onClick}>
      {isOpen ? 
      <SpriteIcon icon='cross-small' color={theme.colors.yellow}/> 
      :
       <SpriteIcon icon='menu-burger'/>
       } 
    </MenuButton>
  )
}

export default MenuBtn

import SpriteIcon from './SpriteIcon';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  color: blue;

  &:hover {
    color: orangered;
  }
`;

const MyComponent = () => {
  return (
    <Wrapper>
      <SpriteIcon icon="arrow-left" />
      <SpriteIcon icon="camera" />
      <SpriteIcon icon="check-round" />
      <SpriteIcon icon="check" />
      <SpriteIcon icon="chevron-down" />
      <SpriteIcon icon="chevron-up" />
      <SpriteIcon icon="clock" />
      <SpriteIcon icon="cross-small" />
      <SpriteIcon icon="cross" />
      <SpriteIcon icon="edit" />
      <SpriteIcon icon="eye-closed" />
      <SpriteIcon icon="eye-open" />
      <SpriteIcon icon="female" />
      <SpriteIcon icon="filters" />
      <SpriteIcon icon="filters-2" />
      <SpriteIcon icon="heart" />
      <SpriteIcon icon="location" />
      <SpriteIcon icon="logout" />
      <SpriteIcon icon="male" />
      <SpriteIcon icon="menu-burger" />
      <SpriteIcon icon="pawprint"  />
      <SpriteIcon icon="plus-small"  />
      <SpriteIcon icon="plus" />
      <SpriteIcon icon="round" />
      <SpriteIcon icon="search" />
      <SpriteIcon icon="trash" />
      <SpriteIcon icon="user" />
    </Wrapper>
  );
};

export default MyComponent;

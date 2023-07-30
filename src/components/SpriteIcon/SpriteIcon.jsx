import styled from 'styled-components';
import sprite from '../../images/svgSprite.svg';

const SvgWrapper = styled.svg`
  display: inline-block;
  stroke-width: 0;
  /* stroke: currentColor;
  fill: currentColor; */
`;

const SpriteIcon = ({ icon, color = 'currentColor', size = '24px', fill }) => {
  return (
    <SvgWrapper
      width={size}
      height={size}
      style={{ fill: `${fill ? color : 'none'}`, stroke: `${color}` }}
    >
      <use href={`${sprite}#icon-${icon}`} />
    </SvgWrapper>
  );
};

export default SpriteIcon;

import React from 'react';
import Four from './Four';
import { Img, Title, Circle, Btn } from './NotFound.styled';
import { ButtonBlueBig } from 'components/Buttons';
import SpriteIcon from 'components/SpriteIcon/SpriteIcon';

import cat from '../../images/notfound/error-cat.png';
import catX from '../../images/notfound/error-cat@2x.png';
import catTab from '../../images/notfound/error-cat-tablet.png';
import catTabX from '../../images/notfound/error-cat-tablet@2x.png';
import catMob from '../../images/notfound/error-cat-mob.png';
import catMobX from '../../images/notfound/error-cat-mob@2x.png';

const NotFound = () => {
  return (
    <div>
      <Title>Ooops! This page not found :(</Title>
      <Img>
        <Four transform={'rotate(-11.342deg)'} />
        <Circle>
          <picture>
            <source
              srcSet={`${cat} 1x, ${catX} 2x`}
              media="(min-width: 1280px)"
              width="325"
            />
            <source
              srcSet={`${catTab} 1x, ${catTabX} 2x`}
              media="(min-width: 768px)"
              width="278"
            />
            <source
              srcSet={`${catMob} 1x, ${catMobX} 2x`}
              media="(min-width: 320px)"
              width="110"
            />
            <img src={cat} alt="French bulldog" />
          </picture>
        </Circle>
        <Four transform={'rotate(24.226deg)'} />
      </Img>
      <Btn to="/">
        <ButtonBlueBig>
          To main page{' '}
          <SpriteIcon icon="pawprint" color="#FEF9F9" size="24px" />
        </ButtonBlueBig>
      </Btn>
    </div>
  );
};

export default NotFound;

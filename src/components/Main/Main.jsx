import React from 'react';
import { Title, Wrap, Dog, CollieDog, Cat, MainWrap } from './Main.styled';

import collieMob from '../../images/mainpage/collie-mob.png';
import collieMobX from '../../images/mainpage/collie-mob@2x.png';
import collieTab from '../../images/mainpage/collie-tablet.png';
import collieTabX from '../../images/mainpage/collie-tablet@2x.png';
import collie from '../../images/mainpage/collie.png';
import collieX from '../../images/mainpage/collie@2x.png';
import bulldogMob from '../../images/mainpage/bulldog-mob.png';
import bulldogMobX from '../../images/mainpage/bulldog-mob@2x.png';
import bulldogTab from '../../images/mainpage/bulldog-tablet.png';
import bulldogTabX from '../../images/mainpage/bulldog-tablet@2x.png';
import bulldog from '../../images/mainpage/bulldog.png';
import bulldogX from '../../images/mainpage/bulldog@2x.png';
import catMob from '../../images/mainpage/cat-mob.png';
import catMobX from '../../images/mainpage/cat-mob@2x.png';
import catTab from '../../images/mainpage/cat-tablet.png';
import catTabX from '../../images/mainpage/cat-tablet@2x.png';
import cat from '../../images/mainpage/cat.png';
import catX from '../../images/mainpage/cat@2x.png';

const Main = () => {
  return (
    <MainWrap>
      <Title>Take good care of your small pets</Title>
      <Wrap>
        <ul>
          <li>
            <Dog>
              <source
                srcSet={`${bulldog} 1x, ${bulldogX} 2x`}
                media="(min-width: 1280px)"
                width="426"
              />
              <source
                srcSet={`${bulldogTab} 1x, ${bulldogTabX} 2x`}
                media="(min-width: 768px)"
                width="426"
              />
              <source
                srcSet={`${bulldogMob} 1x, ${bulldogMobX} 2x`}
                media="(min-width: 320px)"
                width="205"
              />
              <img src={bulldog} alt="French bulldog" width="157" />
            </Dog>
          </li>

          <li>
            <CollieDog>
              <source
                srcSet={`${collie} 1x, ${collieX} 2x`}
                media="(min-width: 1280px)"
                width="538"
              />
              <source
                srcSet={`${collieTab} 1x, ${collieTabX} 2x`}
                media="(min-width: 768px)"
                width="538"
              />
              <source
                srcSet={`${collieMob} 1x, ${collieMobX} 2x`}
                media="(min-width: 320px)"
                width="259"
              />
              <img src={collie} alt="French bulldog" />
            </CollieDog>
          </li>

          <li>
            <Cat>
              <source
                srcSet={`${cat} 1x, ${catX} 2x`}
                media="(min-width: 1280px)"
                width="362"
              />
              <source
                srcSet={`${catTab} 1x, ${catTabX} 2x`}
                media="(min-width: 768px)"
                width="362"
              />
              <source
                srcSet={`${catMob} 1x, ${catMobX} 2x`}
                media="(min-width: 320px)"
                width="159"
              />
              <img src={cat} alt="French bulldog" />
            </Cat>
          </li>
        </ul>
      </Wrap>
    </MainWrap>
  );
};

export default Main;

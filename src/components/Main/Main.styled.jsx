import styled from 'styled-components';

import bg_mobile from '../../images/mainpage/bg_mobile.png';
import bg_mobile2x from '../../images/mainpage/bg_mobile2x.png';
import bg_tablet from '../../images/mainpage/bg_tablet.png';
import bg_tablet2x from '../../images/mainpage/bg_tablet2x.png';
import bg_desktop from '../../images/mainpage/bg_desktop.png';
import bg_desktop2x from '../../images/mainpage/bg_desktop2x.png';

export const MainWrap = styled.section`
height: 82vh;
background-color: ${p => p.theme.colors.backgroundColor};
background-image: url(${bg_mobile});
background-repeat: no-repeat;
background-size: 100%;
background-position: 0 -48px;  

@media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
  background-image: url(${bg_mobile2x});    
}

@media screen and (min-width: 768px) {
  background-image: url(${bg_tablet});
  background-position: -16px -68px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_tablet2x});
  }
}

@media screen and (min-width: 1280px) {
  height: 702px;
  background-image: url(${bg_desktop});
  background-position: -16px -88px;
  
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_desktop2x});
  }
}
`;
export const Title = styled.h1`
  margin: 0 auto 20px 0;
  width: 280px;
  padding-top: 60px;

  color: rgba(0, 0, 0, 1);

  font-family: Manrope700, sans-serif;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: 768px) {
    margin: 0 auto 27px 0;
    width: 588px;
    padding-top: 80px;

    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 188px;

    width: 501px;

    font-weight: 800;
    line-height: 88px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  margin-left: -15px;
  width: 320px;
  height: 387px;

  @media screen and (min-width: 768px) {
    min-width: 768px;
    height: 818px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 98px;
    right: 0;
    min-width: 917px;
    height: 814px;
  }
`;

export const Dog = styled.picture`
  position: absolute;

  transform: rotate(44.82deg) translate(29%, 60%);

  @media screen and (min-width: 768px) {
    transform: rotate(44.82deg) translate(50%, 50%);
  }
  @media screen and (min-width: 1280px) {
    transform: rotate(44.82deg) translate(50%, 35%);
  }
`;

export const CollieDog = styled.picture`
  position: absolute;

  transform: rotate(45.04deg) translate(16%, -25%);

  @media screen and (min-width: 768px) {
    transform: rotate(45.04deg) translate(30%, -34%);
  }
  @media screen and (min-width: 1280px) {
    transform: rotate(45.04deg) translate(36%, -40%);
  }
`;

export const Cat = styled.picture`
  position: absolute;

  transform: rotate(163deg) translate(-70%, -159%);

  @media screen and (min-width: 768px) {
    transform: rotate(163deg) translate(-78%, -155%);
  }
  @media screen and (min-width: 1280px) {
    transform: rotate(163deg) translate(-92%, -159%);
  }
`;

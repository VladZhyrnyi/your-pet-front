import styled from 'styled-components';

export const Title = styled.h1`
  margin: 60px auto 20px 0;
  width: 280px;

  color: rgba(0, 0, 0, 1);

  font-family: Manrope700, sans-serif;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (min-width: 768px) {
    margin: 80px auto 27px 0;
    width: 588px;

    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 188px;

    width: 501px;

    font-weight: 800;
    line-height: 88px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  margin-left: -15px;
  ${'' /* margin-right: -15px; */}
  width: 320px;
  height: 387px;
  ${'' /* overflow: hidden; */}

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
  ${
    '' /* bottom: 50px;
  right: 160px; */
  }
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
  ${
    '' /* bottom: 124px;
  left: 74px; */
  }
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
  ${
    '' /* bottom: 0px;
  left: 176px; */
  }
  transform: rotate(163deg) translate(-70%, -159%);

  @media screen and (min-width: 768px) {
    transform: rotate(163deg) translate(-78%, -155%);
  }
  @media screen and (min-width: 1280px) {
    transform: rotate(163deg) translate(-92%, -159%);
  }
`;

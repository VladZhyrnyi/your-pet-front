import styled from 'styled-components';
import { TiLocationOutline } from 'react-icons/ti';
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { GoClock } from 'react-icons/go';

export const Card = styled.div`
  width: 280px;
  padding-bottom: 24px;

  border-radius: 0px 0px 40px 40px;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  transition: box-shadow ${p => p.theme.transitionTimingFunction};
  

  &:hover {
    box-shadow: ${p => p.theme.boxShadow.second};
  }

  &:hover img {
    transform: scale(1.1);
    cursor: zoom-in;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const Div = styled.div`
  @media (min-width: 768px) {
  }
`;

export const ThumbImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 280px;
  height: 288px;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
  }
`;

export const NameCategory = styled.p`
  position: absolute;
  top: 16px;
  left: 0px;

  width: 126px;

  border-radius: 0px 16px 16px 0px;

  background-color: ${p => p.theme.colors.blueLight};

  padding: 11px 17px;
  margin: 0;

  color: ${p => p.theme.colors.black};
  text-align: center;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
`;

export const ButtonCardWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonCard = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0;
  border-radius: 100%;
  background-color: ${p => p.theme.colors.blueLight};
  cursor: pointer;

  transition: color ${p => p.theme.transitionTimingFunction};
  transition: background-color ${p => p.theme.transitionTimingFunction};

  &:hover {
    background-color: ${p => p.theme.colors.blue};
  }
`;

export const ButtonFavorite = styled(ButtonCard)`
  &:hover svg {
    color: ${p => p.theme.colors.blueLight};
  }
`;

export const IconNotFavorite = styled(AiOutlineHeart)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.blue};
`;

export const IconFavorite = styled(AiFillHeart)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.blue};
`;

export const ButtonTrash = styled(ButtonCard)`
  &:hover svg {
    color: ${p => p.theme.colors.blueLight};
  }
`;

export const IconTrash = styled(FiTrash2)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.blue};
`;

export const WrapperInfo = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1280px) {
    gap: 12px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${p => p.theme.transitionTimingFunction};
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 4px;
  border-radius: 16px;
  background-color: ${p => p.theme.colors.blueLight};

  font-family: Manrope600, sans-serif;
  font-size: 11px;
  letter-spacing: 0.48px;
`;

export const IconLocation = styled(TiLocationOutline)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.blue};
`;

export const IconClock = styled(GoClock)`
  width: 21px;
  height: 21px;
  color: ${p => p.theme.colors.blue};
`;

export const IconMale = styled(BsGenderMale)`
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.blue};
`;

export const IconFemale = styled(BsGenderFemale)`
  width: 20px;
  height: 20px;
  color: ${p => p.theme.colors.blue};
`;

export const Title = styled.p`
  width: 231px;
  align-self: flex-start;
  margin: 0 0 20px 20px;
  color: ${p => p.theme.colors.black};
  font-family: Manrope700, sans-serif;
  font-size: 24px;
`;

export const BtnLearnMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 248px;
  padding: 8px 28px;

  border-radius: 40px;
  outline: none;
  border: 2px solid ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.white};

  cursor: pointer;
  font-family: Manrope600, sans-serif;
  font-size: 16px;
  letter-spacing: 0.64px;

  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover {
    background-image: ${p => p.theme.linearGradient};
    background-origin: border-box;
    background-repeat: no-repeat;
    color: ${p => p.theme.colors.white};
    border: 2px solid transparent;
  }
`;

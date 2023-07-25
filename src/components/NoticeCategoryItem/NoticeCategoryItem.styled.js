import styled from 'styled-components';

export const Container = styled.div`
  /* margin-top: 50px; */
`;

export const Card = styled.div`
  width: 280px;
  height: 456px;
  /* border: 1px dashed black; */

  border-radius: 0px 0px 40px 40px;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1280px) {
    width: 288px;
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

  border-radius: 0px 16px 16px 0px;
  background: ${p => p.theme.colors.blueLight};

  padding: 11px 17px;
  margin: 0;

  color: ${p => p.theme.colors.black};
  text-align: center;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
`;

export const ButtonHeart = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0;
  border-radius: 100%;
  background: ${({ background }) => background};

  color: ${({ color }) => color};

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    /* border: none; */
    transform: scale(1.15);
  }
`;

export const WrapperBtn = styled.div`
  position: absolute;
  bottom: 12px;
  left: 8px;

  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (min-width: 768px) {
    left: 24px;
    gap: 24px;
  }
  @media (min-width: 1280px) {
    left: 12px;
    gap: 12px;
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  width: 231px;
  align-self: flex-start;
  margin: 0 0 20px 20px;
  color: ${p => p.theme.colors.black};
  font-family: Manrope700, sans-serif;
  font-size: 24px;
`;

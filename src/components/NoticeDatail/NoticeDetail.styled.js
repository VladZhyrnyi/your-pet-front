import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const Notice = styled.div`
  margin-top: 44px;

  padding: 0 12px 16px 12px;

  width: 280px;

  @media (min-width: 768px) {
    margin-top: 32px;
    padding: 0 32px 24px 32px;

    width: 681px;
  }
`;

export const WrapperContent = styled.div`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const ThumbImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 240px;
  height: 240px;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: 12px;

  border-radius: 0px 0px 40px 40px;

  @media (min-width: 768px) {
    width: 262px;
    height: 298px;
    margin: 0px;
  }

  @media (min-width: 1280px) {
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapperCont = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
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

export const Title = styled.p`
  width: 231px;
  align-self: flex-start;

  color: ${p => p.theme.colors.black};
  font-family: Manrope700, sans-serif;
  font-size: 24px;
  letter-spacing: -0.24px;

  margin: 0px 0px 22px 0px;

  @media (min-width: 768px) {
    margin: 0px;
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;

export const Table = styled.table`
  margin: 0 0 5px 0;

  @media (min-width: 768px) {
    margin: 0px;
    padding: 0px;
  }
`;

export const TableRow = styled.tr`
  &:last-child td {
    padding: 0px;
  }
`;

export const TableUnit = styled.td`
  padding: 0px 20px 8px 0px;
  border: none;

  color: ${p => p.theme.colors.black};
  font-family: Manrope600, sans-serif;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
    padding-right: 51px;
  }
`;

export const TableUnitData = styled.td`
  padding: 0px 0px 8px 0px;
  border: none;

  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DataLink = styled.a`
  color: ${p => p.theme.colors.yellow};
  font-family: Manrope500;
  font-size: 12px;
  text-decoration-line: underline;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Comment = styled.span`
  color: ${p => p.theme.colors.black};
  font-family: Manrope600, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.64px;
  }
`;
export const CommentData = styled.p`
  margin: 0 0 12px 0;

  color: ${p => p.theme.colors.black};
  font-family: Manrope500, sans-serif;
  font-size: 14px;
  letter-spacing: 0.56px;

  @media (min-width: 768px) {
    margin: 0 0 70px 0;

    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.64px;
  }
`;

export const ButtonDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 17px;
  }
  @media (min-width: 1280px) {
    gap: 17px;
  }
`;

export const Btn = styled.a`
  @media (min-width: 768px) {
    min-width: 90px;
  }
`;

export const IconFavor = styled(AiOutlineHeart)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};
`;

export const IconNotFav = styled(AiFillHeart)`
  display: block;
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.white};
`;

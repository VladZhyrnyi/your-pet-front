import styled from 'styled-components';

export const Notice = styled.div`
  box-sizing: border-box;

  margin-top: 44px;
  padding-left: 12px;
  padding-right: 12px;

  width: 280px;

  border-radius: 20px;
  border: 1px dashed black;

  @media (min-width: 768px) {
    /* display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center; */
    margin-top: 32px;
    padding-left: 32px;
    padding-right: 31px;
    width: 681px;
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
    margin-bottom: 0px;
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

export const NameCategory = styled.p`
  position: absolute;
  top: 16px;
  left: 0px;

  border-radius: 0px 16px 16px 0px;
  background: #cce4fb;

  padding: 11px 17px;
  margin: 0;

  color: #111;
  text-align: center;
  font-family: Manrope500, sans-serif;
  font-size: 14px;
`;

export const Title = styled.p`
  width: 231px;
  align-self: flex-start;

  color: #111;
  font-family: Manrope700, sans-serif;
  font-size: 24px;
  letter-spacing: -0.24px;

  margin: 0px 0px 22px 0px;

  @media (min-width: 768px) {
    margin: 0px 0px 20px 0px;
  }
`;

export const Table = styled.table`
  margin: 0 0 5px 0;

  @media (min-width: 768px) {
    margin: 0 0 5px 0;
  }
`;

export const TableRow = styled.tr``;

export const TableUnit = styled.td`
  padding-bottom: 8px;
  padding-right: 20px;

  color: #000;
  font-family: Manrope600, sans-serif;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
    padding-right: 51px;
  }
`;

export const TableUnitData = styled.td`
  padding-bottom: 8px;

  color: #000;
  font-family: Manrope500, sans-serif;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Comment = styled.span`
  color: #000;
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

  color: #000;
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
  flex-direction: row;
  gap: 8px;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 17px;
    margin-bottom: 24px;
  }
  @media (min-width: 1280px) {
    gap: 17px;
  }
`;

export const ButtonDetail = styled.button`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 40px;

  width: ${({ width }) => width || 'auto'};
  border: 2px solid #54adff;

  padding: 8px 20px;

  border-radius: 40px;
  background: ${({ background }) => background};

  color: ${({ color }) => color};
  font-family: Manrope600, sans-serif;
  font-size: 12px;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-family: Manrope700, sans-serif;
    font-size: 16px;
    border-radius: 40px;
    letter-spacing: 0.64px;
  }
`;

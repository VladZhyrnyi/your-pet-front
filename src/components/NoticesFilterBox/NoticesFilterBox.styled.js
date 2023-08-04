import styled from 'styled-components';

export const Filter = styled.div`
  width: 152px;
  height: auto;
  /* height: 334px; */
  padding: 14px 8px;
  color: ${p => p.theme.colors.blue};
  margin-bottom: 0px;

  border: 0 solid #ffffff;
  border-radius: 20px;
  background-color: #ffffff;

  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0%);
`;

export const FilterTitle = styled.h3`
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const BoxAge = styled.div`
  height: auto;
  margin-bottom: 8px;
  border-radius: 20px;
  background-color: #cce4fb;
`;

export const BoxClose = styled(BoxAge)`
  display: flex;
  width: 136px;
  height: 32px;
  padding: 4px 8px;
  align-items: center;
  cursor: pointer;
`;

export const BoxGender = styled.div`
  height: auto;

  border-radius: 20px;
  background-color: #cce4fb;
`;

export const FilterBoxTitle = styled.h4`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-left: 10px;
`;

export const FilterTitleBox = styled.h4`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  padding: 14px 0 0 14px;
  cursor: pointer;
`;

export const FilterList = styled.ul`
  padding: 14px;
  /* display: none; */
`;

export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  /* cursor: pointer; */
`;

export const FilterText = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin-left: 12px;
`;

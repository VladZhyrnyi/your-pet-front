import styled from 'styled-components';

export const FriendCard = styled.div`
  width: 280px;
  /* min-height: 239px; */
  min-height: 306px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: ${p => p.theme.boxShadow.second};
  flex-direction: column;

  @media (min-width: 768px) {
    width: 336px;
    /* min-height: 275px; */
    min-height: 329px;
  }
  @media (min-width: 1280px) {
    width: calc(33.3333% - 21.3333px);
    max-width: 395px;
    /* min-height: 287px; */
    min-height: 335px;
  }
`;

export const FriendName = styled.h2`
  font-family: Manrope700, sans-serif;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  color: ${p => p.theme.colors.blue};
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
`;

export const FriendBoxInfo = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const FriendIcon = styled.div`
  width: 100px;
  height: 68px;
  margin-left: 12px;

  @media (min-width: 768px) {
    width: 124px;
    height: 88px;
  }
  @media (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`;

export const FriendInfo = styled.div`
  text-align: start;
  margin-left: 12px;

  @media (min-width: 1280px) {
    margin-left: 20px;
  }
`;

export const FriendInfoTitle = styled.h4`
  font-family: Manrope600, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  font-style: normal;

  &:not(:first-child) {
    margin-top: 12px;
  }

  @media (min-width: 768px) {
    font-size: 14px;

    &:not(:first-child) {
      margin-top: 16px;
    }
  }
  @media (min-width: 1280px) {
    font-size: 16px;

    &:not(:first-child) {
      margin-top: 12px;
    }
  }
`;

export const FriendTimeWork = styled.div`
  font-size: 12px;
  position: relative;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }

  &:hover div,
  &:focus div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const FriendTimeThumb = styled.div`
  font-size: 12px;
  font-family: Manrope500, sans-serif;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  padding: 12px;
  position: absolute;
  display: none;
  color: ${p => p.theme.colors.black};
  width: 123px;
  height: 160px;
  border: solid 1px;
  border-color: ${p => p.theme.colors.blue};
  border-radius: 8px;
  background-color: #ffffff;
`;

export const TimeWork = styled.li`
  display: flex;
`;

export const Days = styled.p`
  margin-right: 6px;
`;

export const FriendLink = styled.a`
  font-size: 12px;
  font-family: Manrope500, sans-serif;
  font-weight: 400;
  line-height: normal;
  font-style: normal;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.blue};
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;
// export const FriendAddress = styled.a`
//   &:hover,
//   &:focus {
//     color: ${p => p.theme.colors.blue};
//   }
// `;
// export const FriendEmail = styled.a`
//   &:hover,
//   &:focus {
//     color: ${p => p.theme.colors.blue};
//   }
// `;
// export const FriendPhone = styled.a`
//   &:hover,
//   &:focus {
//     color: ${p => p.theme.colors.blue};
//   }
// `;

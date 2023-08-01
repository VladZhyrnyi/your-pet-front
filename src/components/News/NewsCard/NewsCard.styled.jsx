import styled from 'styled-components';

export const CardWrapper = styled.div`
box-sizing: border-box;
  position: relative;
  width: 280px;
  height: 578px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto 14px;
  padding-bottom: 12px;
  box-sizing: border-box;
  
  font-family: Manrope400, sans-serif;
  font-size: 16px;
  line-height: normal;
  color: ${p => p.theme.colors.black};
  
  background: ${p => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${p => p.theme.boxShadow.first};  

  @media screen and (min-width: 768px) {
    width:336px;
    height: 556px;
  }
  @media screen and (min-width: 1280px) {
    width:395px;
    height: 534px;
  }
    &::before {      
      content: "";
      position: absolute;
      top: -20px;
      left:0;
      width: 100%;
      height: 8px;
      background: ${p => p.theme.linearGradient};
      border-radius: 40px;

      @media screen and (min-width: 768px) {
        top: -22px;
      }
    }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 252px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${p => p.theme.colors.backgroundColor};  
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const InfoWrapper = styled.div`
  height: 298px;
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 12px;
  
  @media screen and (min-width: 768px) {
    height: 276px;
}
  @media screen and (min-width: 1280px) {
    height: 254px;
}
`;
export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;
export const Title = styled.h2`
  margin-bottom: 16px;
  height: 66px;
  font-family: Manrope700;
  font-size: 24px;
  letter-spacing: -0.24px;
  overflow: hidden;
`
export const Text = styled.p`
  margin-bottom: 40px;
  height: 154px;
  font-family: Manrope500, sans-serif;
  font-size: 16px;
  overflow: hidden;
  
  @media screen and (min-width: 768px) {
    height: 132px;
}
  @media screen and (min-width: 1280px) {
    height: 110px;
}
`
export const Date = styled.p`
  color: ${p => p.theme.colors.grey};
`
export const NewsLink = styled.a`
  text-decoration: none;
  text-align: right;
  font-family: Manrope500, sans-serif;
  font-size: 16px;
  color: ${p => p.theme.colors.blue};
  transition: color ${p => p.theme.transitionTimingFunction};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.yellow};
}
`
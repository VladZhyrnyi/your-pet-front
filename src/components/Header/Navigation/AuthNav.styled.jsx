import { ButtonBlueBig,  ButtonWhiteBig } from 'components/Buttons';

import styled from 'styled-components';

export const AuthContainer = styled.div`
//  display: flex;
//  justify-content: space-between;
width: 328px;
height: 40px;


@media screen and (min-width: 768px) {
  width: 328px;
height: 40px;
}
@media screen and (min-width: 1280px) {
  display: flex;
 justify-content: space-between;
 width: 328px;
 height: 40px;
  
}
`


export const ButtonRegister = styled(ButtonWhiteBig)`

width: 142px;
border: 2px solid ${p => p.theme.colors.yellow};
// color: ${p => p.theme.colors.yellow};
// background-color: ${p => p.theme.colors.white};
// font-weight: 600;

// &:hover,
// &:focus {
//   color: ${p => p.theme.colors.white};
//   border: 2px solid transparent;
//   background-image: ${p => p.theme.linearGradient};
// }
`

export const ButtonLogin = styled(ButtonBlueBig)`

width: 142px;
// border: 2px solid ${p => p.theme.colors.yellow};
// color: ${p => p.theme.colors.yellow};
// background-color: ${p => p.theme.colors.white};
// font-weight: 600;

// &:hover,
// &:focus {
//   color: ${p => p.theme.colors.white};
//   border: 2px solid transparent;
//   background-image: ${p => p.theme.linearGradient};
}
`
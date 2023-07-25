import { ButtonBlueBig } from 'components/Buttons';
import styled from 'styled-components';

export const UserNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLogout = styled(ButtonBlueBig)``;
export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-family: Manrope500, sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.colors.yellow};
`;

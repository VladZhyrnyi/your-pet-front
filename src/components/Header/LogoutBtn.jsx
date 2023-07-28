import { styled } from "styled-components";
import { Button } from "./Header.styled";
import SpriteIcon from "components/SpriteIcon/SpriteIcon";

const { Link } = require("react-router-dom");

const ButtonLogout = styled(Button)`
  display: flex;
  width: 165px;
  height: 40px;
  font-family: Manrope700, sans-serif;
  margin-left: 20px;
  gap: 8px;
  // top: 541px;
  // left: 20px;
  padding: 8px, 20px, 8px, 20px;
  border-radius: 40px;
  border: transparent;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};

  @media screen and (min-width: 768px) {
    width: 135px;
     margin-left: 359px;
  }
  @media screen and (min-width: 1280px) {
    // width: 135px;
    margin-left: 329px;

  }
    &:hover,
    &:focus {
      color: ${p => p.theme.colors.blue} !important;
      background-image: ${p => p.theme.colors.lightBlue};
    }

    // &:hover svg,
    // &:focus svg{
    //  fill: ${p => p.theme.colors.white};
  
`;

function LogoutBtn() {
return (
  <Link to="/main">
          <ButtonLogout>
            Log out
            <SpriteIcon icon="logout" primary />
          </ButtonLogout>
        </Link>
)


}
export default LogoutBtn;

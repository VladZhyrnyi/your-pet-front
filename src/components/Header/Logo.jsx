import { LogoContainer } from "./Logo.styled";
import logoBig from '../../images/logo/logo1.png';

const { NavLink } = require("react-router-dom");



const Logo = ()=>{
  return (
    <LogoContainer>
      <NavLink
          to="/main"
          
        >
    
         <img src={logoBig} alt="LOGO" ></img>  
           
          
        
        </NavLink>
    </LogoContainer>
  )
}

export default Logo;
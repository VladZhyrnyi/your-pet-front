import useWindowWidth from 'hooks/useWindowWidth';
import logoBig from '../../../images/logo/logo1.png';
import logoSmall from '../../../images/logo/logo2.png';

const { NavLink } = require('react-router-dom');

const Logo = () => {
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth < 768;

  return (
    <NavLink to="/main">
      {isMobile ? (
        <img src={logoSmall} alt="LOGO"></img>
      ) : (
        <img src={logoBig} alt="LOGO"></img>
      )}
    </NavLink>
  );
};
export default Logo;

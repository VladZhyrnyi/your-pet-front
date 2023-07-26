import logoBig from '../../images/logo/logo1.png';

const { NavLink } = require('react-router-dom');

const Logo = () => {
  return (
    <NavLink to="/main">
      <img src={logoBig} alt="LOGO"></img>
    </NavLink>
  );
};

export default Logo;

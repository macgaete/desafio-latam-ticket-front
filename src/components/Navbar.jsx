import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext.jsx'
import CoolButton from "./CoolButton.jsx";
import logo from '../assets/logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';

  const { user, userCtxLogout } = useUser();

  function handleSignout() {
    userCtxLogout({});
    navigate('/');
  }

  return (
    <>
      <nav className="navbar">
        <span></span> 
        <div className="navlinks">
          { user?.isLoggedIn && <NavLink to="/user-landing" className={`${setActiveClass} coolButton`} > Home </NavLink>}
          { !user?.isLoggedIn && <NavLink to="/" className={`${setActiveClass} coolButton`} > Login </NavLink> } 
          { !user?.isLoggedIn && <NavLink to="/signup" className={`${setActiveClass} coolButton`} > Regístrate </NavLink> }
          { user?.isLoggedIn && <NavLink to='/user-details' className={`${setActiveClass} coolButton`} > Perfil </NavLink> }
          { user?.isLoggedIn && <CoolButton text={'Salir'} onClickFunction={handleSignout} /> }
        </div>
      </nav>
      <img className="logo" src={logo} alt="Logo" />
    </>
  );
};
  
  export default Navbar;
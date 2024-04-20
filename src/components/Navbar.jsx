import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext.jsx'
import CoolButton from "./CoolButton.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';

  const { user, userCtxLogout } = useUser();

  function handleSignout() {
    userCtxLogout({});
    navigate('/login');
  }

  return (
    <nav>
      <span></span>
      <div className="navlinks">
        <NavLink to="/" className={setActiveClass} > Home </NavLink>
        { !user?.isLoggedIn && <NavLink to="/login" className={setActiveClass} > Login </NavLink> } 
        { !user?.isLoggedIn && <NavLink to="/signup" className={setActiveClass} > Regístrate </NavLink> }
        { user?.isLoggedIn && <NavLink className={setActiveClass} to='/user-details'> Perfil </NavLink> }
        { user?.isLoggedIn && <CoolButton text={'Salir'} onClickFunction={handleSignout} /> }
      </div>
    </nav>
  );
};
  
  export default Navbar;
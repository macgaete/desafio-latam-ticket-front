import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext.jsx'

// TODO: Distinguir si usuario ha iniciado sesión para mostrar links condicionalmente

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
        { user?.isLoggedIn && <button onClick={handleSignout}> Salir </button> }
      </div>
    </nav>
  );
};
  
  export default Navbar;
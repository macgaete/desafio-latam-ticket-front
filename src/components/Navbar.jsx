import { NavLink } from "react-router-dom";

// TODO: Distinguir si usuario ha iniciado sesión para mostrar links condicionalmente

const Navbar = () => {
    const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';
  
    return (
      <nav>
        <span></span>
        <div className="navlinks">
          <NavLink to="/" className={setActiveClass} > Login </NavLink>
          <NavLink to="/signup" className={setActiveClass} > Regístrate </NavLink>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
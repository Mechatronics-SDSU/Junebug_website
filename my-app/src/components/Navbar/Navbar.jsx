import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <NavLink className="navbar-brand" to="/">
        Junebug
      </NavLink>
      <div className="navbar-spacer"></div>
      <div className="navbar-item">
          <NavLink className="nav-link" to="/">
            Sign In
          </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
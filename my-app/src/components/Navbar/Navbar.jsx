import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <header className="navbar">
        <NavLink className="navbar-brand" to="/">
        Junebug
        </NavLink>
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to="/">
                Sign In
            </NavLink>
            </li>
        </ul>
    </header>
  );
}

export default Navbar;
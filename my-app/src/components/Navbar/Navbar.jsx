import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Button } from "..";
import {ReactComponent as Logo} from "../../assets/mech_logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/">
          <Logo height="75px" width="80px" align="left"/>
          <text className="navbar-logo-text">Junebug</text>
        </NavLink>
        <div className="navbar-btn">
          <Button name="CART" route="/cart"/>
          <Button name="ORDER" route="/order"/>
          <Button name="SIGN IN" route="/login"/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
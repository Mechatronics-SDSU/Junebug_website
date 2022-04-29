import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Button } from "..";
import { ReactComponent as Logo } from "../../assets/mech_logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink className="navbar-logo" to="/Junebug_website">
          <Logo height="75px" width="80px" align="left" />
          <text className="navbar-logo-text">Junebug</text>
        </NavLink>
        <div className="navbar-btn">
          <Button name="RESTAURANTS" route="/Junebug_website/restaurants" />
          <Button name="CART" route="/Junebug_website/cart" />
          <Button name="Sign In" route="/Junebug_website/login" />
          <Button name="Sign Up" route="/Junebug_website/signup" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Button } from "..";
import { ReactComponent as Logo } from "../../assets/mech_logo.svg"

function Navbar({token}) {
  return (
    <nav className="navbar">
        <NavLink className="navbar-logo" to="/Junebug_website">
          <Logo height="75px" width="80px" align="left" />
          <text className="navbar-logo-text">Junebug</text>
        </NavLink>
        <div className="navbar-btn">
          <Button name="RESTAURANTS" route="/Junebug_website/restaurants" />
          <Button name="CART" route="/Junebug_website/cart" />
          <Button name="LOGIN" route="/Junebug_website/login" />
          <Button name="SIGN UP" route="/Junebug_website/signup" />
        </div>
    </nav>
  );
}

export default Navbar;
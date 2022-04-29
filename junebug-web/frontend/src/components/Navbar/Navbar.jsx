import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Button } from "..";
import { ReactComponent as Logo } from "../../assets/mech_logo.svg"
import { useRef } from "react";

function Navbar({ token, deleteToken }) {

  let loginRoutes = useRef();
    if (token && token["success"]) {
      loginRoutes = (
        <div className="navbar-btn">
          <Button name="RESTAURANTS" route="/Junebug_website/restaurants" />
          <Button name="CART" route="/Junebug_website/cart" />
          <Button name="ACCOUNT" route="/Junebug_website/user" />
          <Button name="LOGOUT" route="/Junebug_website/" callback={deleteToken}/>

        </div>
      );
    }
    else {
      loginRoutes = (
        <div className="navbar-btn">
          <Button name="RESTAURANTS" route="/Junebug_website/restaurants" />
          <Button name="CART" route="/Junebug_website/cart" />
          <Button name="SIGN UP" route="/Junebug_website/signup" />
          <Button name="LOGIN" route="/Junebug_website/login"/>
        </div>

      );
    }



  return (
    <nav className="navbar">
      <NavLink className="navbar-logo" to="/Junebug_website">
        <Logo height="75px" width="80px" align="left" />
        <text className="navbar-logo-text">Junebug</text>
      </NavLink>
      {loginRoutes}
    </nav>
  );
}

export default Navbar;
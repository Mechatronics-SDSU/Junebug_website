import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
        <div class="container">
            <div class="flex">
                <NavLink className="nav-link" to="/about">
                    About
                </NavLink>
            </div>
            <div class="flex">
                <p class="copyright">
                    Copyright &copy; SDSU Mechatronics 2022
                </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
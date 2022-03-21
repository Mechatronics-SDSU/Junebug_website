import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <NavLink className="nav-link" to="/about">
                    About
                </NavLink>
                <p>Copyright &copy; SDSU Mechatronics 2022</p>
            </div>
        </footer>
    );
}

export default Footer;
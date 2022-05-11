import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <NavLink className="nav-link" to="/Junebug_website/about">
                    About
                </NavLink>
                <div className="contact">Contact Us: <u>mechatronics.sdsu@gmail.com</u></div>
                <div className="contact">Copyright &copy; SDSU Mechatronics 2022</div>
            </div>
        </footer>
    );
}

export default Footer;
import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <NavLink className="nav-link" to="/Junebug_website/about">
                    About
                </NavLink>
                <h4>Contact Us: <u>mechatronics.sdsu@gmail.com</u></h4>
                <p>Copyright &copy; SDSU Mechatronics 2022</p>
            </div>
        </footer>
    );
}

export default Footer;
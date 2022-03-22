import { Link } from "react-router-dom";
import "./button.css";

function Button ({route, name}) {
    return (
        <Link to={route} className="btn-container">
            <button className="btn">{name}</button>
        </Link>
    );
}

export default Button;
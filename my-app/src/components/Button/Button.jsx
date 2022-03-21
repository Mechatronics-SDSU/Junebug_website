import { Link } from "react-router-dom";
import "./button.css";

function Button (props) {
    return (
        <Link to='/login' className="btn-container">
            <button className="btn">{props.name}</button>
        </Link>
    );
}

export default Button;
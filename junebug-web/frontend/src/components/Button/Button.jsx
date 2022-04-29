import { Link } from "react-router-dom";
import "./button.css";

function Button ({route, name, callback}) {

    const handleClick = () => {
        if(callback)
            callback();
    }

    return (
        <Link to={route} className="btn-container">
            <button className="btn" onClick={handleClick}>{name}</button>
        </Link>
    );
}

export default Button;
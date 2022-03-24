import { NavLink } from "react-router-dom";
import "./card.css";

function Card({title, body, route}) {
    return (
        <NavLink className="card" to={route}>
            <div className="card-image">
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </NavLink>
    );
}

export default Card;
import { useNavigate } from "react-router-dom";
import "./card.css";

function Card({object, route}) {
    
    const navigate = useNavigate();
    const handleClick = () => {
        if(route) navigate(route, {replace: true});
    }
    return (
        <div className="card" onClick={handleClick}>
            <div className="card-image">
            </div>
            <div className="card-title">
                {object.name}
            </div>
            <div className="card-body">
                <p>{object.description}</p>
            </div>
        </div>
    );
}

export default Card;
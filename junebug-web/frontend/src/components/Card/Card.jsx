import { useNavigate } from "react-router-dom";
import "./card.css";



function Card({title, body, route, isModal}) {
    
    const navigate = useNavigate();
    const handleClick = () => {
        if(route) navigate(route, {replace: true});
        else isModal(); 
    }
    return (
        <div className="card" onClick={handleClick}>
            <div className="card-image">
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    );
}

export default Card;
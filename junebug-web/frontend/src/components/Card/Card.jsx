import { Button } from "..";
import "./card.css";

function Card({title, body}) {
    return (
        <div className="card">
            <div className="card-image">
            </div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <Button route="/Junebug_website" name="View Menu"/>
        </div>
    );
}

export default Card;
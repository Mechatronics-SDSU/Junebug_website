import "./menucard.css";

function MenuCard({object, handleClick}) {
    
    return (
        <div className="menu-card" onClick={() => handleClick(object)}>
            <div className="menu-card-image">
                <img src={object.fname}  width="500" height="500" alt={`${object.name}`}/>
            </div>
            <div className="card-title">
                {object.name}
            </div>
            <br></br>
            <div className="card-body2">
                {object.price} 
            </div>
        </div>
    );
}

export default MenuCard;
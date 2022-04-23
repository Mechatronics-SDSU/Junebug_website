import "./menucard.css";



function MenuCard({object, handleClick}) {
    
    return (
        <div className="menu-card" onClick={() => handleClick(object)}>
            <div className="menu-card-image">
            </div>
            <div className="menu-card-title">
                {object.price} {object.name}
            </div>
        </div>
    );
}

export default MenuCard;
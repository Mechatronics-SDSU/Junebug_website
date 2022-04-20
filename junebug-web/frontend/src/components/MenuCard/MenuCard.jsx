import "./menucard.css";



function MenuCard({object, handleClick}) {
    
    return (
        <div className="menu-card" onClick={() => handleClick(object)}>
            <div className="menu-card-image">
            </div>
            <div className="menu-card-title">
                {object.name}
            </div>
            <div className="menu-card-body">
                <p>{object.description}</p>
            </div>
        </div>
    );
}

export default MenuCard;
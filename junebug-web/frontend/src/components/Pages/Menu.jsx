import { useState } from "react";
import { Card } from "..";
import { Modal } from  "..";

const menuRoute = "/Junebug_website/menu";

// Do some fetch of restuarant items from backend

function Menu() {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(true);
    };

    return(
        <div className="menu">
            <h1>Menu</h1>
            <button onClick={openModal}>Open Modal</button>
            {showModal ? <Modal setShowModal={setShowModal}/> : null}
            <div className="card-container">
                <Card title="Burrito" body="Bean and Cheese" route={menuRoute}/>
                <Card title="Salad" body="Mango Avocado" route={menuRoute}/>
                <Card title="Taco" body="Mahi Mahi Fish Taco" route={menuRoute}/>
            </div>
        </div>
    );
}

export default Menu;
import { useState } from "react";
import { Card } from "..";
import { Modal } from  "..";

// Do some fetch of restuarant items from backend

function Menu() {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(true);
        console.log("Modal Click");
    };

    return(
        <div className="menu">
            <h1>Menu</h1>
            <div className="card-container">
                <Card title="Burrito" body="Bean and Cheese" isModal={openModal}/>
                <Card title="Salad" body="Mango Avocado" isModal={openModal}/>
                <Card title="Taco" body="Mahi Mahi Fish Taco" isModal={openModal}/>
            </div>
            {showModal ? <Modal setShowModal={setShowModal}/> : null}
        </div>
    );
}

export default Menu;
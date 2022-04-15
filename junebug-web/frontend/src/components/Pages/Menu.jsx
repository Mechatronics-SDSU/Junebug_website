import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "..";
import { Modal } from "..";

// Do some fetch of restuarant items from backend

function Menu() {
    const [showModal, setShowModal] = useState(false);
    const [items, setItem] = useState([]);
    const { id } = useParams();


    const openModal = () => {
        setShowModal(true);
    };

    useEffect(() => {
        fetch("/menu").then(response =>
            response.json().then(data => {
                setItem(data.items);
            })
        );
        
    }, [])

    

    return (
        <div className="menu">
            <h1>{id} Menu</h1>
            <div className="card-container">
                {items.map((item) => {
                    return (
                        <Card 
                            title={item.name} 
                            body={item.description} 
                            isModal={openModal} 
                        />
                    );
                })}
            </div>
            {showModal ? <Modal setShowModal={setShowModal}/> : null}
        </div>
    );
}

export default Menu;
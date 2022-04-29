import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "..";
import { MenuCard} from "..";

function Menu() {
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);
    const [menuItemModal, setMenuItemModal] = useState(undefined);
    const [name, setName] = useState();
    const { id } = useParams();

    const handleItemClick = (modalItem) => {
        setMenuItemModal(modalItem);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetch('/menu/' + id + '/').then(response =>
            response.json().then(data => {
                setItems(data.items);
                setName(data.items[0].restName);
            })
        );
    }, [id])

    return (
        <div className="menu">
            <h1>{name} Menu</h1>
            <div className="card-container">
                {items.map(item => {
                    return (
                        <MenuCard
                            key={item.name}
                            object={item}
                            handleClick={handleItemClick}
                        />
                    );
                })}
            </div>
            {showModal ? <Modal handleClose={closeModal} menuItem={menuItemModal} /> : null}
        </div>
    );
}

export default Menu;
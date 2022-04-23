import "./modal.css";
import ReactDom from "react-dom";
import { useContext } from "react";
import { addToCart, CartDispatchContext } from "../../contexts/CartContext";


function Modal({handleClose, menuItem}) {

    const dispatch = useContext(CartDispatchContext);

    const handleAddToCart = () => {
        addToCart(dispatch, menuItem);
    }

    return ReactDom.createPortal(
        <>
        <div className="modal-overlay"/>
        <div className="modal-container">
            <div className="modal">
                <h1>{menuItem.name}</h1>
                <button 
                    className="modal-exit" 
                    onClick={handleClose}>X
                </button>
                <button className="modal-addCart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
        </>,
        document.getElementById("modal-hook")
    );
}

export default Modal;
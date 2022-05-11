import "./modal.css";
import ReactDom from "react-dom";
import { useContext, useState } from "react";
import { addToCart, CartDispatchContext } from "../../contexts/CartContext";


function Modal({ handleClose, menuItem }) {

    const dispatch = useContext(CartDispatchContext);
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleAddToCart = () => {
        const item = { 
            menuItem, 
            quantity: Number(itemQuantity), 
            itemPrice: Number(itemQuantity)*parseFloat(menuItem.price.slice(1)) 
        }
        addToCart(dispatch, item);
    }

    function overall() {
        handleAddToCart();
        handleClose();
    }

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay" />
            <div className="modal-container">
                <div className="modal">
                    <h1>{menuItem.name}</h1>
                    <h2>{menuItem.price}</h2>
                    <h4>{menuItem.description}</h4>
                    <button
                        className="modal-exit"
                        onClick={handleClose}>X
                    </button>
                    <form>
                        <div className="modal-cartQuantity-container">
                            <h3>Quantity</h3>
                            <input type="number"
                                name="quantity"
                                value={itemQuantity}
                                onChange={e => setItemQuantity(e.target.value)}
                                min="0"
                            />
                        </div>
                    </form>
                    <button className="modal-addCart" onClick={overall}>Add to Cart</button>
                </div>
            </div>
        </>,
        document.getElementById("modal-hook")
    );
}

export default Modal;
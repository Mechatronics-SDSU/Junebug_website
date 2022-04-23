import { useContext } from "react";
import { CartDispatchContext, CartStateContext, removeFromCart } from "../../contexts/CartContext";

function Cart() {

    const cartItems = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);

    const handleRemove = (itemRemove) => {
        return removeFromCart(dispatch, itemRemove);
    }

    return (
        <div className="cart">
            <h1>My Cart</h1>
            <ul className="cart-items">
                {cartItems.map(item => {
                    return (
                        <li className="cart-item" key={item.name}>
                            <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">{item.price}</p>
                            </div>
                            <div className="item-total">
                                <p className="amount">{item.price}</p>
                            </div>
                            <button
                                className="item-remove"
                                onClick={() => handleRemove(item)}
                            >x</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Cart;
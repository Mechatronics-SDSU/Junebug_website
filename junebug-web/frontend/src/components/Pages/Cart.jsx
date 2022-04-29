import { useContext, useState } from "react";
import { CartDispatchContext, CartStateContext, removeFromCart } from "../../contexts/CartContext";

function Cart() {

    const [orderTotal, setOrderTotal] = useState(0.00);

    const cartItems = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);

    const handleRemove = (itemRemove) => {
        return removeFromCart(dispatch, itemRemove);
    }

    const handleTotal = (itemPrice) => {
    }

    return (
        <div className="cart">
            <h1>My Cart</h1>
            <ul className="cart-items">
                {cartItems.map(item => {
                    handleTotal(item.price);
                    return (
                        <li className="cart-item" key={item.name}>
                            <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">{item.price}</p>
                            </div>
                            <div className="item-total">
                                <p className="amount">Item Total: {item.price}</p>
                                <button
                                    className="item-remove"
                                    onClick={() => handleRemove(item)}
                                >x</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div checkout>
                <h2>
                    Order Total: ${orderTotal}
                </h2>
                <button className="checkout-btn">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
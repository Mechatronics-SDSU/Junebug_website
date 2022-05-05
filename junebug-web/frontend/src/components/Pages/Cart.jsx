import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartDispatchContext, CartStateContext, removeFromCart } from "../../contexts/CartContext";

function Cart() {

    const [orderTotal, setOrderTotal] = useState(0.00);

    const cartItems = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);

    const navigate = useNavigate();

    const handleRemove = (itemRemove) => {
        return removeFromCart(dispatch, itemRemove);
    }

    const handleTotal = (itemPrice) => {
    }

    const handleCheckout = () =>  {
        navigate('/Junebug_website/checkout',{replace: true});
    }

    return (
        <div className="cart">
            <h1>My Cart</h1>
            <ul className="cart-items">
                {cartItems.map(product => {
                    handleTotal(product.item.price);
                    return (
                        <li className="cart-item" key={product.item.name}>
                            <div className="item-info">
                                <p className="item-name">{product.item.name}</p>
                                <p className="item-price">{product.item.price}</p>
                            </div>
                            <div className="item-total">
                                <p className="amount">Item Total: {product.item.price}</p>
                                <button
                                    className="item-remove"
                                    onClick={() => handleRemove(product.item)}
                                >x</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className="cart-checkout">
                <h2>
                    Order Total: ${orderTotal}
                </h2>
                <button 
                    className="cart-checkout-btn"
                    onClick={handleCheckout}
                >Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
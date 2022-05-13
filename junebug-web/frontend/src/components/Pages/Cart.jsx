import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartDispatchContext, CartStateContext, removeFromCart, updateCart } from "../../contexts/CartContext";

function Cart({ token }) {

    const [orderTotal, setOrderTotal] = useState(0);

    const cartItems = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);
    const navigate = useNavigate();

    const handleRemove = (itemRemoveID) => {
        return removeFromCart(dispatch, itemRemoveID);
    }


    const handleUpdate = (id, quantity) => {
        const itemUpdate = { id, quantity };
        return updateCart(dispatch, itemUpdate);
    }

    const handleCheckout = () => {
        if (token) {
            navigate('/Junebug_website/checkout', { replace: true });
        } else {
            navigate('/Junebug_website/login', { replace: true });
        }
    }

    useEffect(() => {
        setOrderTotal(cartItems.reduce((preValue, curValue) => preValue + Number(curValue.item.itemPrice), 0).toFixed(2));
    }, [cartItems])

    return (
        <div className="cart">
            <h1>My Cart</h1>

            <ul className="cart-items">
                {cartItems.map(product => {
                    return (
                        <li className="cart-item" key={product.item.menuItem.itemID}>
                            <button
                                className="cart-remove"
                                onClick={() => handleRemove(product.item.menuItem.itemID)}
                            >x</button>
                            <div>
                                <img className="cart-image" src={product.item.menuItem.fname} alt={`${product.item.menuItem.name}`} />
                            </div>
                            <div className="cart-item-about">
                                <h1 className="item-name">{product.item.menuItem.name}</h1>
                                <h3 className="item-restName">{product.item.menuItem.restName}</h3>
                            </div>
                            <div className="item-counter">
                                <input
                                    className="item-quantity"
                                    type="number"
                                    name="quantity"
                                    value={product.item.quantity}
                                    onChange={(e) => handleUpdate(product.item.menuItem.itemID, e.target.value)}
                                    min="0"
                                />
                            </div>

                            <div className="item-amount">${product.item.itemPrice.toFixed(2)}</div>
                        </li>
                    );
                })}
            </ul>
            <div className="cart-checkout">
                <h2>
                    Cart Total: ${orderTotal}
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
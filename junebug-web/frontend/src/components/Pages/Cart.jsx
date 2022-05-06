import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartDispatchContext, CartStateContext, removeFromCart, updateCart } from "../../contexts/CartContext";

function Cart({token}) {

    const [orderTotal, setOrderTotal] = useState(0.00);

    const cartItems = useContext(CartStateContext);
    const dispatch = useContext(CartDispatchContext);
    const navigate = useNavigate();

    const handleRemove = (itemRemoveID) => {
        return removeFromCart(dispatch, itemRemoveID);
    }


    const handleUpdate = (id, quantity) => {
        const itemUpdate = {id, quantity};
        return updateCart(dispatch, itemUpdate);
    }

    const handleCheckout = () => {
        if(token){
            navigate('/Junebug_website/checkout', { replace: true });
        } else{
            navigate('/Junebug_website/login', {replace: true});
        }
    }

    useEffect(() => {
        setOrderTotal(cartItems.reduce((preValue, curValue)=> preValue + Number(curValue.item.quantity)*Number(curValue.item.itemPrice), 0).toFixed(2));
    },[cartItems])

    return (
        <div className="cart">
            <h1>My Cart</h1>

            <ul className="cart-items">
                <div className="cart-header">
                    <h2>Item</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Total</h2>
                </div>
                {cartItems.map(product => {
                    return (
                        <li className="cart-item" key={product.item.menuItem.itemID}>
                            <button
                                className="item-remove"
                                onClick={() => handleRemove(product.item.menuItem.itemID)}
                            >x</button>
                            <h2 className="item-name">{product.item.menuItem.name}</h2>
                            <p className="item-price">{product.item.menuItem.price}</p>
                            <input
                                className="item-quantity"
                                type="number"
                                name="quantity"
                                value={product.item.quantity}
                                onChange={(e) => handleUpdate( product.item.menuItem.itemID, e.target.value)}
                                min="0"
                            />
                            <p className="amount">${product.item.itemPrice.toFixed(2)}</p>
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
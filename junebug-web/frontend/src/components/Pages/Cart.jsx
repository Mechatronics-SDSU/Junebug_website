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

    const handleCheckout = () => {
        navigate('/Junebug_website/checkout', { replace: true });
    }

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
                    handleTotal(product.item.menuItem.price);
                    return (
                        <li className="cart-item" key={product.item.menuItem.itemID}>
                            <button
                                className="item-remove"
                                onClick={() => handleRemove(product.item.menuItem)}
                            >x</button>
                            <h2 className="item-name">{product.item.menuItem.name}</h2>
                            <p className="item-price">{product.item.menuItem.price}</p>
                            <input
                                className="item-quantity"
                                type="number"
                                name="quantity"
                                value={product.item.quantity}
                            />
                            <p className="amount">{product.item.menuItem.price}</p>
                        </li>
                    );
                })}
            </ul>
            <div className="checkcont">
                <div className="row">
                    <h3>Billing Address and Delivery Info</h3>
                    <label for="fname"><i class="fa fa-user"></i> First Name </label>
                    <input type="text" id="fname" name="fname" placeholder="John"/><br></br>
                    <label for="lname"><i class="fa fa-user"></i> Last Name </label>
                    <input type="text" id="lname" name="lname" placeholder="Doe"/><br></br>
                    <label for="email"><i class="fa fa-envelope"></i> Email </label>
                    <input type="text" id="email" name="email" placeholder="john@example.com"/><br></br>
                    <label for="adr"><i class="fa fa-address-card-o"></i> Address </label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/><br></br>
                    <label for="city"><i class="fa fa-institution"></i> City </label>
                    <input type="text" id="city" name="city" placeholder="New York"/><br></br>
                    <label for="destination">Choose Delivery Location: </label>
                    <select name="destination" id="destination">
                        <option value="Storm Hall">Storm Hall</option>
                        <option value="Love Library">Love Library</option>
                        <option value="GMCS">GMCS</option>
                        <option value="Student Union">Student Union</option>
                        <option value="Viejas">Viejas</option>
                    </select> <br></br><br></br>
                    <label for="cardnum">Enter Card Number: </label>
                    <input type="text" id="cardnum" name="cardnum"/><br></br>
                    <label for="secNum">Enter Security Number: </label>
                    <input type="text" id="secNum" name="secNum"/><br></br>
                </div>
            </div>    
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
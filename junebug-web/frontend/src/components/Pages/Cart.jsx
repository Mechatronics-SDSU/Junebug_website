import { useContext } from "react";
import { CartStateContext } from "../../contexts/CartContext";

function Cart() {

    const cartItems = useContext(CartStateContext);
    return (
        <div className="cart">
            <h1>My Cart</h1>
            {cartItems.map(item => {
                return (
                    <h2>{item.name}</h2>
                );
            })}
        </div>
    );
}

export default Cart;
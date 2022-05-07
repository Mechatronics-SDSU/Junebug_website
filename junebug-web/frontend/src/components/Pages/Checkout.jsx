import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartStateContext } from "../../contexts/CartContext";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

async function CheckOut(credentials) {
    return fetch('/checkout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Checkout({ token }) {
    const cartItems = useContext(CartStateContext);
    const userID = token["userID"];
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [dest, setDest] = useState('Storm Hall');
    const [cardNum, setCardnum] = useState('');
    const [expiry, setExpiry] = useState('');
    const [Secnum, setSecnum] = useState('');
    const [focus, setFocus] = useState('');
    const [subTotal, setSubTotal] = useState(0.00);
    const [tax, setTax] = useState(0.00);
    const [total, setTotal] = useState(0.00);
    let navigate = useNavigate();

    useEffect(() => {
        setSubTotal(cartItems.reduce((preValue, curValue) => preValue + Number(curValue.item.quantity) * Number(curValue.item.itemPrice), 0).toFixed(2));
        setTax((subTotal * 0.0775).toFixed(2));
        setTotal((Number(subTotal) + Number(tax)).toFixed(2));
    }, [cartItems, subTotal, tax])


    const handleCheckout = async (e) => {
        e.preventDefault();
        const orderresult = await CheckOut({
            cartItems,
            total,
            userID,
            firstName,
            lastName,
            address,
            city,
            dest,
            email,
            cardNum,
            expiry,
            Secnum,
        });
        if (orderresult["success"] === "order placed") {
            alert("Order Success")
            navigate("/Junebug_website/", { replace: true });

        }
    }

    return (
        <div className="Checkout">
            <h1>Checkout</h1>
            <div className="checkcont">
                <div className="row">
                    <h3>Billing Address and Delivery Info</h3>
                    <label for="firstName"><i class="fa fa-user"></i> First Name </label>
                    <input type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={firstName}
                        onChange={e => setfirstName(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="lname"><i class="fa fa-user"></i> Last Name </label>
                    <input type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={e => setlastName(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="email"><i class="fa fa-envelope"></i> Email </label>
                    <input type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="adr"><i class="fa fa-address-card-o"></i> Address </label>
                    <input type="text"
                        id="address"
                        name="address"
                        placeholder="542 W. 15th Street"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="city"><i class="fa fa-institution"></i> City </label>
                    <input type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="destination">Choose Delivery Location: </label>
                    <select name="destination" value={dest} onChange={e => setDest(e.target.value)} id="destination">
                        <option value="Storm Hall">Storm Hall</option>
                        <option value="Love Library">Love Library</option>
                        <option value="GMCS">GMCS</option>
                        <option value="Student Union">Student Union</option>
                        <option value="Viejas">Viejas</option>
                        <option value="Mechatronics Trailer">Mechatronics Trailer</option>
                    </select> <br></br><br></br>
                    <Cards
                    number={cardNum}
                    name={firstName}
                    expiry={expiry}
                    cvc={Secnum}
                    focused={focus}
                    />
                    <br></br>
                    <label for="cardnum">Enter Card Number: </label>
                    <input type="text"
                        id="cardnum"
                        name="cardnum"
                        value={cardNum}
                        // onChange={e => { validateCreditCard(e.target.value); setCardnum(e.target.value) }}
                        onChange={e => setCardnum(e.target.value)}
                        onFocus={e => setFocus(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="secNum">Enter Security Number: </label>
                    <input type="tel"
                        id="secNum"
                        name="secNum"
                        value={Secnum}
                        onChange={e => setSecnum(e.target.value)}
                        onFocus={e => setFocus(e.target.value)}
                        required
                    />
                    <br></br>
                    <label for="secNum">Enter Expiry Data: </label>
                    <input type="text"
                        id="expiry"
                        name="expiry"
                        value={expiry}
                        placeholder = 'MM/YY Expiry'
                        onChange={e => setExpiry(e.target.value)}
                        onFocus={e => setFocus(e.target.value)}
                        required
                    />
                    <br></br>
                    <div className="checkout-container">
                        <h3>Sub Total: ${subTotal}</h3>
                        <h3>Tax Cost: ${tax}</h3>
                        <h3>Total: ${total}</h3>
                        <button className="cart-checkout-btn" onClick={handleCheckout}>Checkout</button>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Checkout;
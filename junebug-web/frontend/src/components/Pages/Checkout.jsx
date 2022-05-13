import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartStateContext, CartDispatchContext, clearCart } from "../../contexts/CartContext";
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
    const dispatch = useContext(CartDispatchContext);
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
        setSubTotal(cartItems.reduce((preValue, curValue) => preValue + Number(curValue.item.itemPrice), 0).toFixed(2));
        setTax((subTotal * 0.0775).toFixed(2));
        setTotal((Number(subTotal) + Number(tax)).toFixed(2));
    }, [cartItems, subTotal, tax])


    const handleCheckout = async (e) => {
        e.preventDefault();
        if(firstName&&lastName&&address&&city&&dest&&email&&cardNum
            &&expiry&&Secnum){
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
                    clearCart(dispatch);
                }
            }
        else {
            alert("Checkout has incorrect information");
        }
    }

    return (
        <div className="row">
            <div className="col-75">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-50">
                            <div className="titledi1">
                                <h2>Billing Address and Delivery Info</h2>
                            </div>
                                <label for="firstName"><i className="fa fa-user"></i> First Name</label>
                                <input type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    value={firstName}
                                    onChange={e => setfirstName(e.target.value)}
                                    required
                                />
                                <label for="lname"><i className="fa fa-user"></i> Last Name</label>
                                <input type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={e => setlastName(e.target.value)}
                                    required
                                />
                                <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                <input type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                                <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                <input type="text"
                                    id="address"
                                    name="address"
                                    placeholder="542 W. 15th Street"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    required
                                />

                                <div className="row">
                                    <div className="col-50">
                                        <label for="city"> City</label>
                                        <input type="text"
                                            id="city"
                                            name="city"
                                            placeholder="New York"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-50">
                                        <label for="destination" className="dest-label">Choose Delivery Location: </label>
                                        <select className="destination" value={dest} onChange={e => setDest(e.target.value)} id="destination">
                                            <option value="Storm Hall">Storm Hall</option>
                                            <option value="Love Library">Love Library</option>
                                            <option value="GMCS">GMCS</option>
                                            <option value="Student Union">Student Union</option>
                                            <option value="Viejas">Viejas</option>
                                            <option value="Mechatronics Trailer">Mechatronics Trailer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="col-50">
                                <div className="titledi2">
                                    <h2>Payment</h2>
                                </div>
                                <Cards
                                    number={cardNum}
                                    name={lastName}
                                    expiry={expiry}
                                    cvc={Secnum}
                                    focused={focus}
                                />
                                <br></br>
                                <div className="cardrow">
                                    <div className="col-50">
                                        <label for="cardnum">Card Number:</label>
                                        <input type="sectext"
                                            id="cardnum"
                                            name="cardnum"
                                            placeholder="Card Number"
                                            value={cardNum}
                                            onChange={e => setCardnum(e.target.value)}
                                            onFocus={e => setFocus(e.target.value)}
                                            maxLength={16}
                                            minLength={16}
                                            pattern="[0-9]{16}"
                                            required

                                        />
                                    </div>
                                    <div className="col-50">
                                        <label for="zipcode">Zip Code:</label>
                                        <input type="sectext"
                                            id="zipcode"
                                            name="zipcode"
                                            placeholder="Zip Code"
                                        />
                                    </div>
                                </div>

                                <div className="smtrow">
                                    <div className="col-50">
                                        <label for="secNum">Enter Security Number: </label>
                                        <input type="sectext"
                                            id="secNum"
                                            name="secNum"
                                            placeholder="Security #"
                                            value={Secnum}
                                            onChange={e => setSecnum(e.target.value)}
                                            onFocus={e => setFocus(e.target.value)}
                                            maxLength={3}
                                            minLength={3}
                                            required
                                        />
                                    </div>
                                    <div className="col-50">
                                        <label for="secNum">Enter Expiry Data: </label>
                                        <input type="sectext"
                                            id="expiry"
                                            name="expiry"
                                            value={expiry}
                                            placeholder='MM/YY'
                                            onChange={e => setExpiry(e.target.value)}
                                            onFocus={e => setFocus(e.target.value)}
                                            pattern="[0-9]{2}/[0-9]{2}"
                                            maxLength={5}
                                            minLength={5}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout-container">
                            <h3>Sub Total: ${subTotal}</h3>
                            <h3>Tax Cost: ${tax}</h3>
                            <h1 className="cart-checkout-total">Total: ${total}</h1>
                            <button className="cart-checkout-btn" onClick={handleCheckout}>Checkout</button>
                        </div>
                    </form>
                </div>
            </div>

        </div >


    );
}

export default Checkout;
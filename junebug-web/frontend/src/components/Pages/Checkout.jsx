import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartDispatchContext, CartStateContext, removeFromCart, updateCart } from "../../contexts/CartContext";

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

function Checkout({ token }){
    const cartItems = useContext(CartStateContext);
    const userID = token["userID"];
    console.log(userID);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [dest, setDest] = useState('Storm Hall');
    const [cardNum, setCardnum] = useState('');
    const [Secnum, setSecnum] = useState('');
    let navigate = useNavigate();


    const handleCheckout = async (e) => {
        e.preventDefault();
        const orderresult = await CheckOut({
            cartItems,
            userID,
            firstName,
            lastName,
            address,
            city,
            dest,
            email,
            cardNum,
            Secnum,
        });
        if(orderresult["success"]==="order placed"){
            alert("Order Success")
            navigate("/Junebug_website/",{replace: true});

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
                    />
                    <br></br>
                    <label for="lname"><i class="fa fa-user"></i> Last Name </label>
                    <input type="text" 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Doe"
                        value={lastName} 
                        onChange={e => setlastName(e.target.value)}
                    />
                    <br></br>
                    <label for="email"><i class="fa fa-envelope"></i> Email </label>
                    <input type="text" 
                        id="email" 
                        name="email" 
                        placeholder="john@example.com"
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <br></br>
                    <label for="adr"><i class="fa fa-address-card-o"></i> Address </label>
                    <input type="text" 
                        id="address" 
                        name="address" 
                        placeholder="542 W. 15th Street"
                        value={address} 
                        onChange={e => setAddress(e.target.value)}
                    />
                    <br></br>
                    <label for="city"><i class="fa fa-institution"></i> City </label>
                    <input type="text" 
                        id="city" 
                        name="city" 
                        placeholder="New York"
                        value={city} 
                        onChange={e => setCity(e.target.value)}
                    />
                    <br></br>
                    <label for="destination">Choose Delivery Location: </label>
                    <select name="destination" value={dest} onChange={e => setDest(e.target.value)} id="destination">
                        <option value="Storm Hall">Storm Hall</option>
                        <option value="Love Library">Love Library</option>
                        <option value="GMCS">GMCS</option>
                        <option value="Student Union">Student Union</option>
                        <option value="Viejas">Viejas</option>
                    </select> <br></br><br></br>
                    <label for="cardnum">Enter Card Number: </label>
                    <input type="text" 
                        id="cardnum" 
                        name="cardnum"
                        value={cardNum} 
                        onChange={e => setCardnum(e.target.value)}
                    />
                    <br></br>
                    <label for="secNum">Enter Security Number: </label>
                    <input type="text" 
                        id="secNum" 
                        name="secNum"
                        value={Secnum} 
                        onChange={e => setSecnum(e.target.value)}
                    />
                    <br></br>
                    <button className="cart-checkout-btn" onClick={handleCheckout}>Checkout</button>
                </div>
            </div>   
        </div>
    );
}

export default Checkout;
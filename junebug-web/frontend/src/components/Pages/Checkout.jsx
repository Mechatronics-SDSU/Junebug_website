function Checkout(){
    return (
        <div className="Checkout">
            <h1>Checkout</h1>
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
        </div>
    );
}

export default Checkout;
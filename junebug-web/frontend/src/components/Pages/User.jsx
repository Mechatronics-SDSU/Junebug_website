import { useState, useEffect } from "react";

function User({ token }) {                     //takes the token input
    const userID = token["userID"];  //gets userID from the token
    const [bio, setBio] = useState([]); //declare state variable items 
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userID)
        })
            .then(data => data.json()
                .then(data => {
                    setBio(data.bio);
                    setOrders(data.orders);
                }));
    }, [userID])
    
    return (

        <div className="user-container">
            {bio.map(item => {
                return (
                    <div class="user-wrap">
                        <div class="right">
                            <div class="info">
                                <h3>User Account</h3>
                                <div class="info_data">
                                    <div class="data">
                                        <h4>Name</h4>
                                        <p>{item.firstName} {item.lastName}</p>
                                    </div>
                                    <div class="data">
                                        <h4>Email</h4>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <div class="info_data">
                                    <div class="data">
                                        <  h4>Phone</h4>
                                        <p>{item.phoneNum}</p>
                                    </div>
                                    <div class="data">
                                        <h4>Type</h4>
                                        <p>Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                );
            })};
        </div>
    );
}

export default User;
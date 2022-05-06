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
        <>
            <div className="user-container">
                {bio.map(item => {
                    return (
                        <div class="user-wrap">
                            <div class="info">
                                <h1>User Account</h1>
                                <div class="data">
                                    <h2>Name</h2>
                                    <p>{item.firstName} {item.lastName}</p>
                                </div>
                                <div class="data">
                                    <h2>Email</h2>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                            <div class="info">
                                <div class="data">
                                    <h2>Phone</h2>
                                    <p>{item.phoneNum}</p>
                                </div>
                                <div class="data">
                                    <h2>Type</h2>
                                    <p>Member</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="order-history-container">
                    <h1>Order History</h1>
                    {orders.map(order => {
                        return (
                            <div className="order-container">
                                <h3>Order Total: ${order.total}</h3>
                                {order.cartItems.map(product => {
                                    return (
                                        <div className="order-item">
                                            <p>{product.item.menuItem.restName}</p>
                                            <p>{product.item.menuItem.name}</p>
                                            <p>{product.item.quantity}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    );
}

export default User;
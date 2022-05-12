import { useState, useEffect } from "react";

function User({ token }) {              //takes the token input
    const userID = token["userID"];     //gets userID from the token
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
                <h1>User Account</h1>
                {bio.map(item => {
                    return (
                        <table className="user-row">
                            <tr className="col-50">
                                <div className="user-data">
                                    <div>
                                        <h2><u>NAME</u></h2>
                                    </div>
                                    <h2 className="user-item-data">{item.firstName} {item.lastName}</h2>
                                </div>
                                <div className="user-data">
                                    <div>
                                        <h2><u>EMAIL</u></h2>
                                    </div>
                                    <h2 className="user-item-data">{item.email}</h2>
                                </div>
                            </tr>
                            <tr className="col-50">
                                <div className="user-data">
                                    <div>
                                        <h2><u>PHONE #</u></h2>
                                    </div>
                                    <h2 className="user-item-data">{item.phoneNum}</h2>
                                </div>
                                <div className="user-data">
                                    <div>
                                        <h2><u>TYPE</u></h2>
                                    </div>
                                    <h2 className="user-item-data">Member</h2>
                                </div>
                            </tr>
                        </table>
                    )
                })}
                <h1>Order History</h1>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Location</th>
                            <th>Restaurant</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            return (
                                <tr className="user-order-container">
                                    <td>{order.orderID}</td>
                                    <td>{order.destination}</td>
                                    <td>
                                        {order.cartItems.map(product => {
                                            return (
                                                <div className="user-item">{product.item.menuItem.restName}</div>
                                            )
                                        })}
                                    </td>
                                    <td>
                                        {order.cartItems.map(product => {
                                            return (
                                                <div className="user-item">{product.item.menuItem.name}</div>
                                            )
                                        })}
                                    </td>
                                    <td>
                                        {order.cartItems.map(product => {
                                            return (
                                                <div className="user-item">{product.item.quantity}</div>
                                            )
                                        })}
                                    </td>
                                    <td>${order.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default User;
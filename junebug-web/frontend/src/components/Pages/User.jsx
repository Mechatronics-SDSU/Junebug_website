import { useState, useEffect } from "react";

function User({ token }) {                     //takes the token input
    const userID = token["userID"];         //gets userID from the token
    const [items, setItems] = useState({
        firstName: 'no info',
        lastName: 'no info',
        email: 'no info',
        phoneNum: 'no info',
    }); //declare state variable items 

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
                    setItems(data.items);
                }));
    }, [userID])

    return (
        <div className="User">
            <h1>My Account</h1>
            <div className="user-container">
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => {
                            return (
                                <tr>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNum}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User;
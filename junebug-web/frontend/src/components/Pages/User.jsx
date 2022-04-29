import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useToken from "../../hooks/useToken";

function User({token}){
    const userID = token["userID"];
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/user/' + userID + '/').then(response =>
            response.json().then(data => {
                setItems(data.items);
            })
        );
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
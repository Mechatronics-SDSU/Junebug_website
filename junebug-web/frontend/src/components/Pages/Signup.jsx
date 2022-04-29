import { useState } from "react";

async function signupUser(credentials) {
    console.log(credentials);
    return fetch('/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Signup({setToken}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [phoneNum, setphoneNum] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await signupUser({
            email,
            password,
            firstName,
            lastName, 
            phoneNum
        });
        console.log(token);
        setToken(token);
    }

    return (
        <div class= "signup"> 
        <center> <h1> Register </h1> </center>   
        <form onSubmit={handleSubmit}>  
            <div class= "signup-container">   
                <label>Email : </label>   
                <input type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required
                />  
                <label>Password : </label>   
                <input type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required 
                />
                <label>First Name : </label>   
                <input type="firstName" 
                    placeholder="First Name" 
                    name="firstName"
                    value={firstName}
                    onChange={e => setfirstName(e.target.value)}
                    required 
                />  
                <label>Last Name : </label>   
                <input type="lastName" 
                    placeholder="Last Name" 
                    name="lastName"
                    value={lastName}
                    onChange={e => setlastName(e.target.value)}
                    required 
                />  
                <label>Phone Number : </label>   
                <input type="phoneNum" 
                    placeholder="Phone Number" 
                    name="phoneNum"
                    value={phoneNum}
                    onChange={e => setphoneNum(e.target.value)}
                    required 
                />    
                <button type="submit">Sign Up</button>      
            </div>   
        </form>
        </div>
    );
}

export default Signup;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({setToken, removeToken}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        setToken(token);
        if(token["success"]) {
            navigate("/Junebug_website/", {replace: true});
        }
        else if(token["error"]) {
            removeToken();
        }
    }

    return (
        <div class= "login"> 
        <center> <h1> Login </h1> </center>   
        <form onSubmit={handleSubmit}>  
            <div class= "login-container">   
                <input type="email" 
                    placeholder="Enter Email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required
                />  
                <input type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required 
                />  
                <button type="submit">Login</button>    
            </div>   
        </form>
        </div>
    );
}

export default Login;
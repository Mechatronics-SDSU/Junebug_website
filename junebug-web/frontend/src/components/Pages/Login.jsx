import { useState } from "react";

async function loginUser(credentials) {
    console.log(credentials);
    return fetch('/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({setToken}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        console.log(token);
        setToken(token);
    }

    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={handleSubmit}>
                        <h1 className="">Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password </label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
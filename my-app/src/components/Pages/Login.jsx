function Login() {
    return (
        <div className="login">
            <form>
                <div className="login-container">
                    <label>SDSU Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="login-container">
                    <label>Password</label>
                    <input type="password" name="pass" required/>
                </div>
                <div className="login-btn-container">
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    );
}

export default Login;
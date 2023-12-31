import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    const [goToWelcome, setGoToWelcome] = useState('');
    
        if (goToWelcome){
        return <Navigate to="/welcome" />
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlfor="email">email</label>
                <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="youremail@gmail.com"
                id="email" name="email"/>
                <label htmlfor="password">password</label>
                <input value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password" placeholder="******** "
                id="password" name="password"/>
                <button onClick={() => {setGoToWelcome(true);}} type="submit">Log In</button>
            </form>
            <Link to='/register'>Don't have an account? Register here.</Link>
            <div className="back-to-home">
            <form>
                <Link to='/'> 
                    <button>Go Back</button>
                </Link>
            </form>
            </div>
        </div>
    )
}

export default Login;

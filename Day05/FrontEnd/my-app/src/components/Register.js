import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    const [goToWelcome, setGoToWelcome] = React.useState('');
    
        if (goToWelcome){
        return <Navigate to="/welcome" />
        }
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlfor="name">Full name</label>
                <input input value={name}
                onChange={(e) => setName(e.target.value)}
                type="name" placeholder="Full name"
                id="name" name="name"></input>
                <label htmlfor="email">email</label>
                <input value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="youremail@gmail.com"
                id="email" name="email"/>
                <label htmlfor="password">password</label>
                <input value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password" placeholder="********"
                id="password" name="password"/>
                <button onClick={() => {setGoToWelcome(true);}} type="submit">Register</button>
            </form>
            <Link to='/login'>Already have an account? Login here</Link>
            <form className="back-to-home">
            <Link to='/'>
                    <button>Go back</button>
            </Link></form>
        </div>
    )
}

export default Register;

import React, { useState } from "react"
import { Link, Navigate } from "react-router-dom";

export const Welcome = (props) => {
    return (
        <div className="auth-form-container">
            <h2>You are now a member of our company</h2>
            <Link to='/'>Login out</Link>
        </div>
        )
}

export default Welcome;
import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import BackgroundImage from '../assets/to-do-list-apps.png'

function HomePage () {
    return (
        <header style={ HeaderStyle }>
            <center>
                <div>
                    <h1>Welcome to the Home Page!</h1>
                    <Link to="/FirstPage">
                    <button>Go to Another Page</button>
                    </Link>
                </div>
            </center>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default HomePage

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }


    return (
        <nav className="navbar">
            <h2 className="brand">Router</h2>
            <ul className="nav-links">
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to="/user" style={navStyle}>
                    <li>User</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;
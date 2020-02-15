import React from 'react';
import './Navbar.scss';
import logo from '../../1.png';

function Navbar() {
    return <nav className="navbar">
        <img src={logo} alt="city tours logo" height="100px" />
        <ul className="nav-links">

            <li>
                <a href="/" className="nav-link"> HOME </a>
            </li>
            <li>
                <a href="/" className="nav-link"> ABOUT </a>
            </li>
            <li>
                <a href="/" className="nav-link active"> TOURS </a>
            </li>

        </ul>
    </nav>
}

export default Navbar;
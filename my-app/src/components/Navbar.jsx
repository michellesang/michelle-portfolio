import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-links">
                    <li><a href="#HOME">HOME</a></li>
                </ul>
                <ul className="nav-links">
                    {/*<li><a href="#ABOUT">ABOUT</a></li>*/}
                    {/*<li><a href="#EXPERIENCE">EXPERIENCE</a></li>*/}
                    {/*<li><a href="#PROJECTS">PROJECTS</a></li>*/}
                    <li><a href="#CONTACT">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
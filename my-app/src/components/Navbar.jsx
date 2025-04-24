import React from 'react';
import '../styles/Navbar.css';
import favicon from '/android-chrome-512x512.png';

function Navbar() {
    const scrollToHome = () => {
        document.getElementById('HOME').scrollIntoView({behavior: 'smooth'});
    };
    const scrollToAbout = () => {
        document.getElementById('ABOUT').scrollIntoView({behavior: 'smooth'});
    };
    const scrollToExperience = () => {
        document.getElementById('EXPERIENCE').scrollIntoView({behavior: 'smooth'});
    };
    const scrollToProjects = () => {
        document.getElementById('PROJECTS').scrollIntoView({behavior: 'smooth'});
    };
    const scrollToContact = () => {
        document.getElementById('CONTACT').scrollIntoView({behavior: 'smooth'});
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/*<a className="nav-logo" onClick={scrollToHome}>HOME</a>*/}
                <img className="nav-logo" onClick={scrollToHome} src={favicon} alt="Miffy Icon"/>
                <div className="nav-bubble">
                    <ul className="nav-links">
                        <li><a onClick={scrollToAbout}>ABOUT</a></li>
                        <li><a onClick={scrollToExperience}>EXPERIENCE</a></li>
                        <li><a onClick={scrollToProjects}>PROJECTS</a></li>
                        <li><a onClick={scrollToContact}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
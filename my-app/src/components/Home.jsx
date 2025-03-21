import React from 'react';
import '../styles/Home.css';
import arrow from "../assets/arrow.png";

function Home() {
    const scrollToAbout = () => {
        document.getElementById('ABOUT').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home" id="HOME">
            <div className="home-container">
                <h1 className="home-text">Hi, my name is</h1>
                <h1 className="home-name">Michelle Sang</h1>
                <h1 className="home-text">Aspiring software engineer</h1>
            </div>
            {/*<img className="arrow" src={arrow} alt="arrow" onClick={scrollToAbout} />*/}
        </div>
    );
}

export default Home;
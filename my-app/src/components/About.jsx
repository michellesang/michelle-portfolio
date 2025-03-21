import React from 'react';
import '../styles/About.css';
import headshot from '../assets/headshot.jpeg';

function About() {
    return (
        <div className="about" id="ABOUT">
            <div className="about-container">
                <div className="about-text">
                    <h1>about me</h1>
                    <p className="blurb">
                        I am a student at
                        <a href="https://www.utdallas.edu/"
                        > The University of Texas at Dallas </a
                        >
                        pursuing computer science. I have a passion for making a difference
                        through technology and design. I am always looking for opportunities
                        to learn and grow as a software developer. <br/><br/>Beyond programming,
                        I enjoy rock reading, pickleball, and playing with my cat.
                        <br/>
                        <br/>
                        Whoosh! &#9732;
                    </p>
                </div>
                <img className="headshot" src={headshot} alt="My graduation picture"/>
            </div>
        </div>
    );
}

export default About;
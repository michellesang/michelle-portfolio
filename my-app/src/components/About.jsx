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
                        I was born and raised in Austin, TX, before moving to Dallas to study
                        Computer Science at The University of Texas at Dallas. During my time as a student,
                        I've focused on developing my skills in frontend and UI/UX design, as well as
                        backend and API development. I excel in team environments, both as a leader and a follower.
                        For me, coding is a creative outlet, and I love turning ideas into reality.

                        <br/><br/>
                        I'm currently seeking a new-grad or entry-level software engineering position, where I can
                        leverage my passion for learning to make an impact. I have more expertise in frontend, but I'm
                        excited to learn more about backend and full-stack development.

                        <br/><br/>
                        Beyond programming, I enjoy reading, pickleball, and experimenting with matcha.
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
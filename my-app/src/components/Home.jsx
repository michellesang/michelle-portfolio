import React from 'react';
import '../styles/Home.css';
import resume from '../assets/Michelle_Sang_Resume.pdf';
import {FaFileAlt, FaGithub, FaLinkedin} from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home" id="HOME">
            <div className="home-container">
                <h1 className="home-text">Hi, my name is</h1>
                <h1 className="home-name">Michelle Sang</h1>
                <h1 className="home-text">Aspiring software engineer</h1>
                <div className="home-buttons">
                    <a
                        href="https://www.linkedin.com/in/michellesang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaLinkedin className="icon linkedin-icon" size={25}/>
                    </a>
                    <a
                        href="https://github.com/michellesang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FaGithub className="icon github-icon" size={25}/>
                    </a>
                    <a
                        href={resume}
                        download="Michelle_Sang_Resume.pdf"
                        className="icon-link"
                    >
                        <FaFileAlt className="icon resume-icon" size={25}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import '../styles/Projects.css';
import catastropheImage from '../assets/catastrophe-home.png';
import retailSyncImage from '../assets/retailsync-example.png';
import tweetAnalysisImage from '../assets/tweet-analysis-example.png';

const projectsData = [
    {
        image: catastropheImage,
        alt: "CATastrophe Screenshot",
        title: "CATastrophe",
        description: "A game where the player is a cat, and the goal is to destroy as much as possible.",
        link: ""
    },
    {
        image: retailSyncImage,
        alt: "RetailSync Screenshot",
        title: "RetailSync",
        description: "An e-commerce website that allows users to buy and sell products.",
        link: ""
    },
    {
        image: tweetAnalysisImage,
        alt: "Tweet Analysis Screenshot",
        title: "Tweet Analysis",
        description: "A dashboard that analyzes disaster-related tweets and provides insights " +
            "and displays tweets with a map",
        link: "https://disaster-tweet-analysis.vercel.app/"
    }
];

function Projects() {
    return (
        <div className="projects" id="PROJECTS">
            <div className="projects-container">
                <h1 className="header">projects</h1>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-item">
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="project-image"
                            />
                            <h2 className="content-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    click to view &#8599;
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
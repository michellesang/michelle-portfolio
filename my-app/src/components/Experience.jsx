import React from 'react';
import '../styles/Experience.css';

const experienceData = [
    {
        selection: "Research Assistant",
        title: "Undergraduate Research Assistant",
        company: "The University of Texas at Dallas",
        duration: "December 2024 - Present",
        description: [
            "Assisted in the development of a novel Artificial Intelligence dataset for meme interpretation. " +
            "An exciting opportunity to work with my professor on a project that combines my interests in AI and social media.",
        ]
    },
    {
        selection: "Marketer",
        title: "Sales & Marketing Intern",
        company: "City of Carrollton",
        duration: "June 2024 - Present",
        description: [
            "Through this internship, I have gained valuable experience in marketing and event planning, as well as" +
            " the opportunity to connect and work with a diverse group of individuals.",
        ]
    },
    {
        selection: "Seller",
        title: "Sales Associate",
        company: "Texas Auto Value",
        duration: "April 2023 - September 2023",
        description: [
            "Analyzed and recorded market trends, learning the art of marketing in the automation industry."
        ]
    },
    {
        selection: "Software Developer",
        title: "Software Engineer Intern",
        company: "Vinebase",
        duration: "June 2020 - August 2020",
        description: [
            "Engineered a Java-based web scraper to automate data analysis and visualization for over 100 winery locations," +
            " building foundational relationships with winery associations across California."
        ]
    }
];

function Experience() {
    return (
        <div className="experience" id="EXPERIENCE">
            <div className="experience-container">
                <h1 className="header">experience</h1>
                {experienceData.map((item, index) => (
                    <div key={index} className="experience-item">
                        <h2 className="content-title">{item.title}</h2>
                        <div className="company-duration">
                            <h3 className="company">{item.company}</h3>
                            <p className="duration">{item.duration}</p>
                        </div>
                        {/*<hr className="divider"/>*/}
                        <ul className="description">
                            {item.description.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
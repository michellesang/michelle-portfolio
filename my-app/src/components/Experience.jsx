import React, {useState} from 'react';
import '../styles/Experience.css';

const experienceData = [
    {
        title: "Undergraduate Research Assistant",
        company: "The University of Texas at Dallas",
        duration: "December 2024 - Present",
        description: "Assisted in the development of a novel Artificial Intelligence dataset for meme interpretation. " +
            "Analyzed logical fallacies and designed annotation guidelines to improve dataset quality"
    },
    {
        title: "Sales & Marketing Intern",
        company: "City of Carrollton",
        duration: "June 2024 - Present",
        description: "Led the construction of a newly launched esports center, designing and assembling 20 high-performance PCs. " +
            "Streamlined CRM processes, increasing revenue from previous esports center by over 500%. " +
            "Conducted research for data-driven decision making, whose feedback optimized marketing and event planning"
    },
    {
        title: "Sales Associate",
        company: "Texas Auto Value",
        duration: "April 2023 - September 2023",
        description: "Analyzed market trends and recommended the most profitable products based on time and resource considerations. " +
            "Recorded appraisal values of cars in Excel, resulting in an increase of up to 15 cars per week for the company. "
    },
    {
        title: "Software Engineer Intern",
        company: "Vinebase",
        duration: "June 2020 - August 2020",
        description: "Engineered a Java-based web scraper to automate data analysis and visualization for over 100 winery locations. " +
            "Helped build foundational relationships and spread connections to all winery associations in California"
    }
];

function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="experience" id="EXPERIENCE">
            <div className="experience-container">
                <h1 className="header">Experience</h1>
                <div className="tabs">
                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className="tab-content">
                    <h2 className="title">{experienceData[activeTab].title}</h2>
                    <div className="company-duration">
                        <h3 className="company">{experienceData[activeTab].company}</h3>
                        <p className="duration">{experienceData[activeTab].duration}</p>
                    </div>
                    <p className="description">{experienceData[activeTab].description}</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
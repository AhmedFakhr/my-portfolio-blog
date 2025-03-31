"use client"; // 👈 This makes it a Client Component

import "../app/globals.css";

export default function Skills() {
    const skills = [
        "Oracle (11g, 12c, 19c)",
        "SQL Server",
        "PostgreSQL",
        "PL/SQL",
        "T-SQL",
        "Power BI",
        "SSRS",
        "ETL (SSIS, BCP, ODI)",
        "Database Performance Tuning",
        "Data Warehousing",
        "Cloud (Azure, AWS RDS)",
        "Database Security & Compliance",
        "Oracle Data Guard & RAC",
        "Shell Scripting"
    ];

    const handleSkillClick = (skill) => {
        const query = encodeURIComponent(skill); // Ensures safe URL format
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    };

    return (
        <div className="skills-container">
            <h2 className="skills-title">Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-card cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
                        onClick={() => handleSkillClick(skill)}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

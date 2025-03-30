import "../app/globals.css";
export default function Skills() {
    const skills = ["JavaScript", "React", "Next.js", "Node.js", "CSS", "Tailwind", "MongoDB", "Git"];

    return (
        <div className="skills-container">
            <h2 className="skills-title">Tech Stack</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

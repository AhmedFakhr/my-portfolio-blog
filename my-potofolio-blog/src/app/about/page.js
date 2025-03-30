
import "../globals.css"; // Make sure this is linked!
export default function AboutPage() {
    return (
        <div className="about-container">
            <div className="about-content">
                <img
                    src="/profile.jpg"
                    alt="Ahmed Fakhraldin"
                    className="profile-img"
                />
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <strong>Ahmed Fakhraldin</strong>, a passionate developer, writer, and tech enthusiast.
                        I love sharing my knowledge, building exciting projects, and learning new technologies.
                    </p>
                    <p>
                        My journey in tech started with curiosity and has led me to work on various projects,
                        from web development to software engineering. I believe in lifelong learning and the power of innovation.
                    </p>
                </div>
            </div>
        </div>
    );
}

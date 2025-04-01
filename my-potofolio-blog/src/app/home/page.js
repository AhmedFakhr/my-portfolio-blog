import { Link } from 'react-router-dom';
import Skills from "../../components/skills";
import Testimonials from "../../components/Testimonials";
import "../globals.css";

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="home-title">Hey, I&apos;m Ahmed! 👋</h1>
                <p className="home-subtitle">
                    Welcome to my <span className="highlight">Portfolio & Blog</span>.
                    I share my knowledge, projects, and thoughts on technology.
                </p>
                <Link to="/blog" className="home-button">📖 Read My Blog</Link>
                {/* <div className="skills-testimonials-container" ></div> */}
                <Skills />
                <Testimonials />
            </div>
        </div>
    );
}

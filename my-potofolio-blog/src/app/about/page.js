import "../globals.css"; // Ensure styles are applied
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="about-container">
            <div className="about-content">
                <Image src="/profile.png" alt="Ahmed Fakhraldin" width={180} height={180} className="profile-img" />
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        Hi, I&apos;m <strong>Ahmed Fakhraldin</strong>, a Senior Oracle Database Administrator and Developer
                        with over <strong>4 years of IT operations experience</strong>. I specialize in database management, development,
                        and administration, ensuring high availability and performance for enterprise-level applications.
                    </p>

                    <p>
                        My expertise spans <strong>Oracle, SQL Server, and PostgreSQL</strong>, with a strong track record in
                        database design, query optimization, and implementing robust backup/recovery strategies.
                        I focus on building efficient, scalable, and secure database solutions that enhance
                        business operations and meet SLA/SLO targets.
                    </p>

                    <p>
                        Beyond databases, I am passionate about IT infrastructure optimization, performance tuning, and staying
                        up to date with the latest technologies in data management. My goal is to leverage my technical skills
                        to solve real-world challenges and contribute to impactful projects.
                    </p>

                    {/* Resume Download Section */}
                    <div className="resume-section">
                        <h2>My Resume</h2>
                        <Link href="/Ahmd_Fakhraldin_Resume.pdf" passHref legacyBehavior>
                            <a download className="download-btn">📥 Download My Resume</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Add this line to mark the component as a client-side component
'use client';

import "../globals.css"; // Ensure styles are applied
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from "react";

// Fun typing effect on page load
const TypingEffect = () => {
    useEffect(() => {
        const message = "Senior Database Developer & Administrator | Oracle, PostgreSQL, SQLServer @ Caelum Group GmpH";
        let index = 0;
        const typingElement = document.getElementById("typing-effect");

        const typingInterval = setInterval(() => {
            typingElement.innerHTML += message[index];
            index++;

            if (index === message.length) {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return <span id="typing-effect"></span>;
};

export default function AboutPage() {
    useEffect(() => {
        // Add event listener for hover effect on profile picture
        const profileImage = document.getElementById("profile-img");
        profileImage.addEventListener("mouseenter", () => {
            profileImage.style.transform = "scale(1.1)";
            profileImage.style.transition = "transform 0.3s ease-in-out";
        });
        profileImage.addEventListener("mouseleave", () => {
            profileImage.style.transform = "scale(1)";
        });
    }, []);

    return (
        <div className="about-container">
            <div className="about-content">
                <div className="profile-container">
                    <Image
                        src="/profile.png"
                        alt="Ahmed Fakhraldin"
                        width={180}
                        height={180}
                        id="profile-img"
                        className="profile-img"
                    />
                </div>



                <div className="about-text">

                    <h2 className="typing-title">Currently Working On:</h2>
                    <p>
                        <TypingEffect />
                    </p>
                    <p>
                        Hi, I&apos;m <strong>Ahmed Fakhraldin</strong>, a Senior Database Administrator and Developer specializing in
                        building high-performance, scalable, and secure database solutions. With over <strong>5 years of experience</strong>
                        in the IT and database management space, my focus is on delivering database architecture that ensures optimal performance
                        while maintaining high availability and disaster recovery protocols.
                    </p>

                    <p>
                        I have a deep understanding of <strong>Oracle, PostgreSQL, and SQL Server</strong> databases. My career journey has allowed me
                        to design and implement various database infrastructures, optimize performance through efficient query design, and automate
                        administrative tasks to improve the overall efficiency of the systems I manage. I pride myself on my ability to solve complex
                        database-related issues and my proactive approach to ensuring data integrity and security.
                    </p>

                    <p>
                        My passion for IT infrastructure and database optimization goes beyond my daily job. I believe in continuous learning and
                        am constantly exploring new technologies, tools, and best practices in the world of databases. My mission is to leverage
                        my technical skills to create innovative solutions that meet the dynamic needs of businesses and contribute to the success
                        of the teams I work with.
                    </p>

                    <p>
                        Outside of work, I love sharing my knowledge with others and contributing to the database community. I often write
                        blog posts on database management, performance tuning, and troubleshooting, and I enjoy speaking at conferences and meetups.
                        This portfolio serves as a reflection of my passion for technology, my journey, and my commitment to continuous growth.
                    </p>


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

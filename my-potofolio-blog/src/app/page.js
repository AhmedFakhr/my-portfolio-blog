'use client'; // Marks this as a client component

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [greeting, setGreeting] = useState("");
    const [sqlTip, setSqlTip] = useState("");

    // Function to set greeting based on the time of day
    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) {
            setGreeting("Good Morning");
        } else if (hours < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }
    }, []);

    // SQL tips for the day
    useEffect(() => {
        const tips = [
            "Always use parameterized queries to prevent SQL injection.",
            "Normalize until it hurts, denormalize until it works.",
            "Use EXPLAIN to analyze your query performance.",
            "Index your WHERE and JOIN columns wisely.",
            "Avoid SELECT * in production queries."
        ];
        setSqlTip(tips[Math.floor(Math.random() * tips.length)]);
    }, []);

    // Confetti effect on button hover
    const triggerConfetti = () => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti";
        document.body.appendChild(script);

        script.onload = () => {
            window.confetti({
                particleCount: 100,
                spread: 80,
                origin: { x: 0.5, y: 0.5 },
            });
        };
    };

    // Fun typing effect on page load
    const TypingEffect = () => {
        useEffect(() => {
            const message = "Welcome to my Portfolio & Blog ";
            let index = 0;
            const typingElement = document.getElementById("typing-effect");

            const typingInterval = setInterval(() => {
                if (typingElement) typingElement.innerHTML += message[index];
                index++;

                if (index === message.length) {
                    clearInterval(typingInterval);
                }
            }, 100);

            return () => clearInterval(typingInterval);
        }, []);

        return <span id="typing-effect"></span>;
    };

    return (
        <div className="landing-home-container dark:landing-home-container-dark">
            <div className="floating-particles-background"></div>

            <div className="landing-content-wrapper dark:landing-content-wrapper-dark">
                <h1 className="landing-main-heading dark:landing-main-heading-dark typing-effect">
                    {greeting}, <TypingEffect />
                </h1>

                <p className="landing-intro-text dark:landing-intro-text-dark">
                    Hi, I&apos;m Ahmed Fakhraldin. I share my knowledge, projects, and articles here.
                </p>

                <Link
                    href="/blog"
                    className="landing-cta-button dark:landing-cta-button-dark"
                    onMouseEnter={triggerConfetti}
                >
                    Read My Blog
                </Link>

                {/* Terminal Style Section */}
                <div style={{
                    marginTop: '3rem',
                    backgroundColor: '#161b22',
                    padding: '1rem',
                    borderRadius: '10px',
                    fontFamily: 'Fira Code, monospace',
                    color: '#58a6ff',
                }}>
                    <p>&gt; whoami</p>
                    <p>Ahmed Fakhraldin - DBA | Developer | Writer</p>
                    <p>&gt; uptime</p>
                    <p>Online for: 3,650+ days (still debugging life)</p>
                    <p>&gt; sudo impress</p>
                    <p>Access granted ✅</p>
                </div>

                {/* SQL Tip Section */}
                <div style={{
                    marginTop: '2rem',
                    color: '#ffd700',
                    fontStyle: 'italic',
                }}>
                    💡 SQL Tip of the Day: {sqlTip}
                </div>

                {/* Fake DB Dashboard */}
                <div style={{
                    marginTop: '2rem',
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    color: '#c9d1d9'
                }}>
                    <div>
                        <strong>Queries/sec:</strong> 742
                    </div>
                    <div>
                        <strong>Backups today:</strong> 3
                    </div>
                    <div>
                        <strong>Coffee consumed:</strong> ∞
                    </div>
                </div>
            </div>

        </div>
    );
}

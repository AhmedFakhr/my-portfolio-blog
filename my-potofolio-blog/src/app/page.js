'use client'; // Marks this as a client component

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [greeting, setGreeting] = useState("");
    const [showSurprise, setShowSurprise] = useState(false);

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
            const message = "Welcome to my Portfolio";
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


    return (
        <div className="landing-home-container dark:landing-home-container-dark">
            {/* Interactive Floating Particles Background */}
            <div className="floating-particles-background">
                {/* Floating particles can be added with an external library like Particles.js */}
            </div>

            <div className="landing-content-wrapper dark:landing-content-wrapper-dark">
                {/* Typing effect on main heading */}
                <h1 className="landing-main-heading dark:landing-main-heading-dark typing-effect">
                    {greeting}, <TypingEffect />
                </h1>

                <p className="landing-intro-text dark:landing-intro-text-dark">
                    Hi, I&apos;m Ahmed Fakhraldin. I share my knowledge, projects, and articles here.
                </p>

                {/* CTA Button with confetti effect on hover */}
                <Link
                    href="/blog"
                    className="landing-cta-button dark:landing-cta-button-dark"
                    onMouseEnter={triggerConfetti} // Trigger confetti effect when hovered
                >
                    Read My Blog
                </Link>

            </div>

            {/* Add mouse trail effect */}
            <div className="mouse-trail" />
        </div>
    );
}

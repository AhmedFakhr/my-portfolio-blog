'use client'; // ✅ Marks this as a client component

import "./globals.css"; // Ensure global styles are applied
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import icons

// Fun Confetti Effect
const ConfettiEffect = () => {
    useEffect(() => {
        const confetti = document.createElement('script');
        confetti.src = "https://cdn.jsdelivr.net/npm/canvas-confetti";
        document.body.appendChild(confetti);

        confetti.onload = () => {
            window.confetti({
                particleCount: 100,
                spread: 90,
                origin: { y: 0.6 },
            });
        };

        return () => document.body.removeChild(confetti);
    }, []);

    return null;
};

// Random database joke
const RandomJoke = () => {
    const jokes = [
        "Why do programmers prefer dark mode? Because the light attracts bugs! 🐞",
        "Why did the SQL query go to therapy? It had too many joins. 😄",
        "Why did the database administrator break up with the query? It wasn't normalized. 😅",
        "I asked my database for a date. It returned NULL. 🧐",
        "I’ve got a joke about SQL, but it’s SELECTive. 😜"
    ];

    const [joke, setJoke] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setJoke(jokes[randomIndex]);
    }, [jokes]); // ✅ Added 'jokes' to the dependency array

    return (
        <div className="random-joke">
            {joke}
        </div>
    );
};

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for the menu toggle

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    return (
        <html lang="en">
            <body className={darkMode ? "dark-mode" : ""}>
                <header className="header">
                    <nav className="navbar">
                        <h1>Ahmed Fakhraldin</h1>
                        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                            <Link href="/home">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                            <button onClick={toggleTheme} className="theme-toggle">
                                {darkMode ? "🌞 Light" : "🌙 Dark"}
                            </button>
                        </div>
                        <div className="hamburger" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </header>

                <main className="content">{children}</main>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} Ahmed Fakhraldin. All rights reserved.</p>

                    {/* Random Joke Display */}
                    <RandomJoke />

                    <div className="footer-links">
                        {/* Replaced text links with icons */}
                        <a href="https://www.linkedin.com/in/ahmed-fakhraldin-290a501b2/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/AhmedFakhr" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://wa.me/00201124260270" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} />
                        </a>
                    </div>
                </footer>

                {/* Confetti Effect on Theme Toggle */}
                {darkMode && <ConfettiEffect />}
            </body>
        </html>
    );
}

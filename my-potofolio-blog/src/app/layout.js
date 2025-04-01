"use client"; // ✅ Marks this as a client component

import "./globals.css"; // Ensure global styles are applied
import { useEffect, useState } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

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

    return (
        <html lang="en">
            <body className={darkMode ? "dark-mode" : ""}>
                <header className="header">
                    <nav className="navbar">
                        <h1>Ahmed Fakhraldin</h1>
                        <div className="nav-links">
                            <Link href="/home">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                            {/* <Link href="/previewpdf">
                                <button className="preview-pdf-btn">📄</button>
                            </Link*/}
                            <button onClick={toggleTheme} className="theme-toggle">
                                {darkMode ? "🌞 Light" : "🌙 Dark"}
                            </button>
                        </div>
                    </nav>
                </header>

                <main className="content">{children}</main>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} Ahmed Fakhraldin. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="https://www.linkedin.com/in/ahmed-fakhraldin-290a501b2/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://github.com/AhmedFakhr" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://wa.me/00201124260270" target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a> 
                    </div>
                </footer>
            </body>
        </html>
    );
}

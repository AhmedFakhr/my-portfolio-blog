'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [greeting, setGreeting] = useState("");
    const [sqlTip, setSqlTip] = useState("");
    const [input, setInput] = useState("");
    const [terminalOutput, setTerminalOutput] = useState([]);
    const [currentDir, setCurrentDir] = useState("~");
    const [mode, setMode] = useState("bash");
    const [fileSystem, setFileSystem] = useState({ "~": {} });

    const [queries, setQueries] = useState(742);
    const [backups, setBackups] = useState(3);
    const [coffee, setCoffee] = useState(0);

    const tips = [
        "Always use parameterized queries to prevent SQL injection.",
        "Normalize until it hurts, denormalize until it works.",
        "Use EXPLAIN to analyze your query performance.",
        "Index your WHERE and JOIN columns wisely.",
        "Avoid SELECT * in production queries."
    ];

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) setGreeting("Good Morning");
        else if (hours < 18) setGreeting("Good Afternoon");
        else setGreeting("Good Evening");
    }, []);

    useEffect(() => {
        setSqlTip(tips[Math.floor(Math.random() * tips.length)]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setQueries(q => q + Math.floor(Math.random() * 3));
        }, 5 * 60 * 1000); // every 5 minutes
        return () => clearInterval(interval);
    }, []);

    const getPrompt = () => mode === 'bash' ? `ahmed@portfolio:${currentDir}$` : 'sql>';

    const handleCommand = (cmd) => {
        let output = "";

        if (mode === 'sql') {
            if (cmd.toLowerCase() === 'exit') {
                setMode('bash');
                return { cmd, res: 'Exiting SQL mode...' };
            }
            if (cmd.toLowerCase().startsWith("select")) {
                return {
                    cmd,
                    res: `+----+--------+\n| ID | Name   |\n+----+--------+\n| 1  | Ahmed  |\n| 2  | GPT    |\n+----+--------+`
                };
            }
            return { cmd, res: "Unknown SQL command" };
        }

        const args = cmd.trim().split(" ");
        const base = args[0];

        switch (base) {
            case "help":
                output = "Available commands: ls, cd, mkdir, touch, clear, sql, exit, help";
                break;
            case "clear":
                setTerminalOutput([]);
                return null;
            case "ls":
                output = Object.keys(fileSystem[currentDir] || {}).join("  ") || "";
                break;
            case "mkdir":
                const folderName = args[1];
                if (folderName) {
                    setFileSystem(prev => {
                        const newFS = { ...prev };
                        newFS[currentDir][folderName] = {};
                        return newFS;
                    });
                    output = "";
                } else {
                    output = "mkdir: missing operand";
                }
                break;
            case "touch":
                const fileName = args[1];
                if (fileName) {
                    setFileSystem(prev => {
                        const newFS = { ...prev };
                        newFS[currentDir][fileName] = null;
                        return newFS;
                    });
                    output = "";
                } else {
                    output = "touch: missing file operand";
                }
                break;
            case "cd":
                const dir = args[1];
                if (dir && fileSystem[currentDir][dir] !== undefined && fileSystem[currentDir][dir] !== null) {
                    setCurrentDir(currentDir + '/' + dir);
                } else if (dir === "..") {
                    const path = currentDir.split("/");
                    path.pop();
                    setCurrentDir(path.join("/") || "~");
                } else {
                    output = `cd: ${dir}: No such file or directory`;
                }
                break;
            case "sql":
                setMode("sql");
                return { cmd, res: "Entering SQL mode... Type 'exit' to return." };
            case "backup":
                setBackups(b => b + 1);
                output = "Backup completed successfully ✅";
                break;
            default:
                output = `Command not found: ${cmd}`;
        }

        return { cmd, res: output };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const result = handleCommand(input);
        if (result) setTerminalOutput([...terminalOutput, result]);
        setInput("");
    };

    // Typing Effect
    const TypingEffect = () => {
        useEffect(() => {
            const message = "Welcome to my Portfolio & Blog ";
            let index = 0;
            const typingElement = document.getElementById("typing-effect");

            const typingInterval = setInterval(() => {
                if (typingElement) typingElement.innerHTML += message[index];
                index++;

                if (index === message.length) clearInterval(typingInterval);
            }, 100);

            return () => clearInterval(typingInterval);
        }, []);

        return <span id="typing-effect"></span>;
    };

    // Confetti Effect
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

    return (
        <div className="landing-home-container dark:landing-home-container-dark">
            <div className="landing-content-wrapper dark:landing-content-wrapper-dark">
                <h1 className="landing-main-heading dark:landing-main-heading-dark">
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

                {/* Terminal Interface */}
                <div className="terminal-box">
                    {terminalOutput.map((entry, idx) => (
                        <div key={idx}>
                            <p><span className="prompt">{getPrompt()}</span> {entry.cmd}</p>
                            <pre>{entry.res}</pre>
                        </div>
                    ))}
                    <form onSubmit={handleSubmit}>
                        <span className="prompt">{getPrompt()}</span>
                        <input
                            className="terminal-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            autoFocus
                        />
                    </form>
                </div>

                {/* SQL Tip */}
                <div
                    className="sql-tip-box"
                    onClick={() => setSqlTip(tips[Math.floor(Math.random() * tips.length)])}
                    title="Click to get another tip!"
                >
                    💡 SQL Tip of the Day: {sqlTip}
                </div>

                {/* Interactive Dashboard */}
                <div className="dashboard">
                    <div title="Live DB query traffic 🚀">
                        <strong>Queries/sec:</strong> {queries}
                    </div>
                    <div
                        title="Click to run a backup!"
                        onClick={() => {
                            setTerminalOutput(prev => [...prev, { cmd: 'backup', res: 'Backup completed successfully ✅' }]);
                            setBackups(b => b + 1);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <strong>Backups today:</strong> {backups}
                    </div>
                    <div
                        title="Click to drink ☕"
                        onClick={() => setCoffee(c => c + 1)}
                        style={{ cursor: "pointer" }}
                    >
                        <strong>Coffee consumed:</strong> {coffee} cups
                    </div>
                </div>
            </div>
        </div>
    );
}

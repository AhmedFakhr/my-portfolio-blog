'use client';

import "../globals.css";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TypingEffect = () => {
    useEffect(() => {
        const message = "Senior Database Developer & Administrator | Oracle, PostgreSQL, SQLServer @ Caelum Group GmpH";
        let index = 0;
        const typingElement = document.getElementById("typing-effect");

        const typingInterval = setInterval(() => {
            typingElement.innerHTML += message[index];
            index++;
            if (index === message.length) clearInterval(typingInterval);
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return <span id="typing-effect"></span>;
};

const skills = {
    Database: [
        { name: 'Oracle', level: 95, tooltip: 'Oracle Database Tools: RMAN, ODG, OEM, ASM, Data Pump, SQL*Loader, Database Configuration Assistant\nOracle Utilities: Golden Gate, Oracle Exadata, Oracle RAC, SQL Tuning Advisor, AWR, ADDM'},
        { name: 'PostgreSQL', level: 90, tooltip: 'PostgreSQL Tools: pgAdmin, psql, pg_dump, pg_restore, pg_stat_statements, PgHero, PgBadger, PgBouncer, PostGIS\nPostgreSQL Utilities: Autovacuum, Logical/Physical Replication, Partitioning, Indexing, Extensions, Performance Tuning, JSON/JSONB Handling, Roles & Permissions, Backup & Restore, Cloud Deployment (AWS RDS, GCP, Azure), Version Upgrades, PL/pgSQL Functions, Triggers'},
        { name: 'SQL Server', level: 90, tooltip: 'SQL Server Tools: SQL Server Management Studio (SSMS), SQLCMD, SQL Server Profiler, Database Tuning Advisor, Azure Data Studio\nSQL Server Utilities: Backup & Restore, Always On Availability Groups, Log Shipping, Database Mirroring, SQL Agent Jobs, Indexing, Partitioning, CLR Integration, SSIS, SSRS, SSAS, Query Optimization, Roles & Permissions, Monitoring (DMVs, Extended Events), Data Migration Assistant (DMA), TempDB Management'},
    ],
    Performance_Analytics: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'SSRS', level: 75 },
    ],
    Data_Modeling: [
        { name: 'ERWin', level: 80 },
        { name: 'Toad Data Modeler', level: 75 },
        { name: 'SSDD', level: 70 },
        { name: 'Visio', level: 70 },
    ],
    DevOps: [
        { name: 'CI/CD', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Database Automation', level: 85 },
    ],
    Cloud_Virtualization: [
        { name: 'Azure (PaaS/IaaS)', level: 80 },
        { name: 'AWS (EC2/S3/RDS)', level: 75 },
        { name: 'VMware', level: 70 },
    ],
    Scripting_Languages: [
        { name: 'SQL/T-SQL/PLSQL', level: 95 },
        { name: 'HTML', level: 100 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python/ Shell Scripting', level: 75 },
    ],
    Operating_System: [
        {
            name: 'Windows Server',
            level: 80,
            tooltip: 'Windows Server Tools: Server Manager, PowerShell, Active Directory, Group Policy, Hyper-V, Windows Admin Center\nWindows Server Skills: User/Group Management, DNS/DHCP Configuration, File/Print Services, IIS Administration, Backup & Restore, Patch Management, Performance Monitoring'
        },
        {
            name: 'Linux/ Unix',
            level: 90,
            tooltip: 'Linux/Unix Tools: Bash, cron, systemd, journalctl, top/htop, ssh, scp, rsync, LVM\nLinux/Unix Skills: User & File Permission Management, Package Management (yum, apt), Shell Scripting, Network Configuration, Log Management, Process Monitoring, Firewall (iptables, firewalld), Disk & Filesystem Management'
        },
        {
            name: 'VMWare',
            level: 75,
            tooltip: 'VMware Tools: vSphere, vCenter, ESXi, vMotion, VMware Tools\nVMware Skills: VM Provisioning & Cloning, Resource Allocation, Snapshots, Templates, Virtual Networking, Storage Configuration, Performance Monitoring, Backup & Restore'
        },
        {
            name: 'Kubernetes/ Docker',
            level: 85,
            tooltip: 'Container Tools: Docker CLI, Docker Compose, Kubernetes CLI (kubectl), Helm, Minikube\nContainer Skills: Containerization, Pod/Deployment Management, Services & Ingress, Volume Management, Dockerfile & Image Optimization, Scaling, Health Checks, ConfigMaps & Secrets, CI/CD Integration'
        }
    ]

};

const SkillBarGroup = ({ title, skills }) => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <div className="skill-group">
            <h3>{title}</h3>
            {skills.map((skill, idx) => (
                <div
                    key={idx}
                    className="skill-bar"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{ position: 'relative' }}
                >
                    <div className="skill-label">{skill.name}</div>
                    <div className="bar-bg">
                        <div
                            className="bar-fill"
                            style={{ '--target-width': `${skill.level}%`, width: `${skill.level}%` }}
                        >
                            {skill.level}%
                        </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredIdx === idx && skill.tooltip && (
                        <div className="tooltip-box">
                            {skill.tooltip}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};


const SkillBars = () => (
    <div className="skill-bars-container">
        {Object.entries(skills).map(([category, skillList]) => (
            <SkillBarGroup key={category} title={category} skills={skillList} />
        ))}
    </div>
);

export default function AboutPage() {
    useEffect(() => {
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
                    <p><TypingEffect /></p>
                    <p>
                        Hi, I&apos;m <strong>Ahmed Fakhraldin</strong>, a Senior Database Administrator and Developer specializing in
                        building high-performance, scalable, and secure database solutions. With over <strong>5 years of experience </strong>
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

                    {/* Skill Bars */}
                    <h2>Technical Skills</h2>
                    <SkillBars />
                    </div>

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

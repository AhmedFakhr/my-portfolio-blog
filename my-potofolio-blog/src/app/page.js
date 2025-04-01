import Link from "next/link";
export default function Home() {
    return (
        <div className="landing-home-container dark:landing-home-container-dark">
            <div className="landing-content-wrapper dark:landing-content-wrapper-dark">
                <h1 className="landing-main-heading dark:landing-main-heading-dark">Welcome to My Portfolio & Blog</h1>
                <p className="landing-intro-text dark:landing-intro-text-dark">
                    Hi, I&apos;m Ahmed Fakhraldin. I share my knowledge, projects, and articles here.
                </p>
                <Link
                    href="/blog"
                    className="landing-cta-button dark:landing-cta-button-dark"
                >
                    Read My Blog
                </Link>
            </div>
        </div>
    );
}

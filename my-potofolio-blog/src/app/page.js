export default function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio & Blog</h1>
            <p className="text-gray-600 mt-4">
                Hi, I'm Ahmed Fakhraldin. I share my knowledge, projects, and articles here.
            </p>
            <a
                href="/blog"
                className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Read My Blog
            </a>
        </div>
    );
}

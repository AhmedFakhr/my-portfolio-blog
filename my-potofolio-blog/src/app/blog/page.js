"use client";
import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import "../globals.css";

export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false); // Adding a loading state

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearch = (e) => {
        setLoading(true);
        setSearch(e.target.value);
        setTimeout(() => {
            setLoading(false);
        }, 500); // Simulate a short loading time
    };

    return (
        <div className="blog-container">
            <h1 className="text-4xl font-bold text-center mb-6 animate__animated animate__fadeIn">
                My Blog
            </h1>

            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full p-2 mb-4 border rounded search-input animate__animated animate__fadeInUp"
                />
                {loading && <div className="loader">🔄 Searching...</div>} {/* Loader */}
            </div>

            <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div key={post.id} className="blog-post hover:shadow-lg transition duration-300">
                            <h2 className="blog-title hover:text-blue-500 transition duration-300">{post.title}</h2>
                            <p className="blog-meta">{post.date}</p>
                            <Link href={`/blog/${post.id}`} className="blog-link hover:text-red-500 transition duration-300">
                                Read More →
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
}

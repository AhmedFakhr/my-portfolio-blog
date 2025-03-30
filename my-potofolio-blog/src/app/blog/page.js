"use client";
import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import "../globals.css";

export default function BlogPage() {
    const [search, setSearch] = useState("");

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="blog-container">
            <h1 className="text-4xl font-bold text-center mb-6">My Blog</h1>

            <input
                type="text"
                placeholder="Search blog posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-2 mb-4 border rounded"
            />

            <div className="space-y-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div key={post.id} className="blog-post">
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-meta">{post.date}</p>
                            <Link href={`/blog/${post.id}`} className="blog-link">
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

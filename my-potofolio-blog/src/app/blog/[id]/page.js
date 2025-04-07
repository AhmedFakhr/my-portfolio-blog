"use client"; // Ensure this is added at the top

import { posts } from "@/data/posts";
import Link from "next/link";
import { use } from "react"; // Import use from React

export default function BlogPost({ params }) {
    // Unwrap params using React.use() to access the 'id' properly
    const { id } = use(params);

    const post = posts.find((p) => p.id === id);

    if (!post) {
        return <h1 className="text-center mt-10 text-3xl">Post Not Found</h1>;
    }

    return (
        <div className="blog-container">
            <div className="blog-post animate__animated animate__fadeIn">
                <h1 className="blog-title">{post.title}</h1>
                <p className="blog-meta">{post.date}</p>
                <hr className="my-4" />

                {/* Render the content with sections */}
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Back Button */}
                <div className="back-button-container">
                    <Link href="/blog" className="back-button hover:bg-gray-200 transition duration-300">
                        🔙 Back to Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
}

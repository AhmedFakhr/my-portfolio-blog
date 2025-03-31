import { posts } from "@/data/posts";

export default function BlogPost({ params }) {
    const post = posts.find((p) => p.id === params.id);

    if (!post) {
        return <h1 className="text-center mt-10 text-3xl">Post Not Found</h1>;
    }

    return (
        <div className="blog-container">
            <div className="blog-post">
                <h1 className="blog-title">{post.title}</h1>
                <p className="blog-meta">{post.date}</p>
                <hr className="my-4" />
                <p className="mt-6 text-lg leading-relaxed">{post.content}</p>
            </div>
        </div>
    );
}

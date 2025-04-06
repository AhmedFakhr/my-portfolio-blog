import { posts } from "@/data/posts"; // Assuming you have a static list of posts

export default async function BlogPost({ params }) {
    const { id } = await params;
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return <h1 className="text-center mt-10 text-3xl">Post Not Found</h1>;
    }

    return (
        <div className="blog-container">
            <div className="blog-post">
                <h1 className="blog-title">{post.title}</h1>
                <p className="blog-meta">{post.date}</p>
                <hr className="my-4" />

                {/* Render the content with sections */}
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    );
}

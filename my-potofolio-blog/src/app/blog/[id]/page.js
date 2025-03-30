import { posts } from "@/data/posts";

export default function BlogPost({ params }) {
    const post = posts.find((p) => p.id === params.id);

    if (!post) {
        return <h1 className="text-center mt-10 text-3xl">Post Not Found</h1>;
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-gray-600 mt-2">{post.date}</p>
            <hr className="my-4" />
            <p className="mt-6 text-lg leading-relaxed">{post.content}</p>
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";

export default function AdminMessagesPage() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await fetch("/api/admin/messages", {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_TOKEN}`,
                    },
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to fetch messages");
                setMessages(data.messages);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">📬 Contact Messages</h1>

                {loading && (
                    <div className="text-center text-gray-500 text-lg">Loading...</div>
                )}

                {error && (
                    <div className="text-center text-red-600 font-medium">{error}</div>
                )}

                {!loading && messages.length === 0 && (
                    <div className="text-center text-gray-500">No messages found.</div>
                )}

                <div className="space-y-6">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                                <h2 className="text-xl font-semibold text-gray-800">{msg.name}</h2>
                                <span className="text-sm text-gray-500">
                                    {new Date(msg.submitted_at).toLocaleString()}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{msg.email}</p>
                            <p className="text-gray-800 whitespace-pre-line">{msg.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

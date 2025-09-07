// app/api/admin/messages/route.js
import pool from "@/lib/db";

export async function GET(req) {
    const authHeader = req.headers.get("authorization");

    // Check for the correct authorization token
    if (authHeader !== `Bearer ${process.env.ADMIN_API_TOKEN}`) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const result = await pool.query(
            "SELECT id, name, email, message, submitted_at FROM contact_messages ORDER BY submitted_at DESC"
        );
        return Response.json({ messages: result.rows });
    } catch (error) {
        console.error("Admin fetch error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

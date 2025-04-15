import pool from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        // ✅ First: Send email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: "New Contact Message!",
            text: `New message from ${name} <${email}>:\n\n${message}`,
        });

        // ✅ Then: Try saving to database (optional)
        try {
            await pool.query(
                "INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)",
                [name.trim(), email.trim(), message.trim()]
            );
        } catch (dbError) {
            console.error("DB save failed (email still sent):", dbError.message);
            // Don’t block the response
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Contact submission error:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

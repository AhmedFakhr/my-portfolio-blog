import { appendFile } from "fs";
import path from "path";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        const timestamp = new Date().toISOString();
        const logMessage = `\n[${timestamp}]\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n---`;

        const filePath = path.join(process.cwd(), "public", "messages.txt");

        // Append message to file
        appendFile(filePath, logMessage, (err) => {
            if (err) throw err;
            console.log("Message saved!");
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Error saving message:", error);
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}

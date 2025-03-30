export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        console.log("New message received:", { name, email, message });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}

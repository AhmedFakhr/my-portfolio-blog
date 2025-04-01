import "../app/globals.css";

export default function Testimonials() {
    const testimonials = [
        { name: "Mohamed Salah", feedback: "Ahmed's expertise in database administration is outstanding. His optimization strategies significantly improved our system performance." },
        { name: "Fatima Hussein", feedback: "We relied on Ahmed for a complex multi-cloud database migration, and he delivered beyond expectations with zero downtime." },
        { name: "Liu Taiping", feedback: "His deep knowledge of PostgreSQL and Oracle made him an invaluable asset to our data team." },
        { name: "Sarah Ibrahim", feedback: "Ahmed helped automate our backup and recovery processes, saving us countless hours of manual effort!" },
    ];

    return (
        <div className="testimonials-container max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">What People Say</h2>
            <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card p-4 bg-gray-100 rounded-lg shadow-md">
                        <p className="italic">&quot;{testimonial.feedback}&quot;</p>
                        <p className="font-bold text-right">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

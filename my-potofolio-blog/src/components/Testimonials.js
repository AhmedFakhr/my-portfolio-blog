import "../app/globals.css";
export default function Testimonials() {
    const testimonials = [
        { name: "John Doe", feedback: "Ahmed is an amazing developer with a great eye for detail!" },
        { name: "Jane Smith", feedback: "His work is top-notch, and he always delivers on time." },
        { name: "Michael Brown", feedback: "Fantastic experience working with Ahmed on multiple projects!" },
        { name: "Michael Brown", feedback: "Fantastic experience working with Ahmed on multiple projects!" },
    ];

    return (
        <div className="testimonials-container max-w-3xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
            <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card p-4 bg-gray-100 rounded-lg shadow-md">
                        <p className="italic">"{testimonial.feedback}"</p>
                        <p className="font-bold text-right">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


"use client";
import { useState } from "react";
import "../globals.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            setErrorMessage("");

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    setSubmitted(true);
                } else {
                    setErrorMessage(data.error || "Something went wrong");
                }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setErrorMessage("Failed to send message. Please try again later.");
            }

            setLoading(false);
        } else {
            setErrors(newErrors);
        }
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setSubmitted(false);
        setErrorMessage("");
    };

    return (
        <div className="contact-container">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>

            {submitted ? (
                <div className="success-message">
                    ✅ Thank you for reaching out! I&apos;ll get back to you soon.
                    <button onClick={handleReset} className="close-btn">Send Another Message</button>
                </div>
            ) : errorMessage ? (
                <div className="error-message">
                    ❌ {errorMessage}
                    <button onClick={handleReset} className="close-btn">Try Again</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error-message">{errors.name}</p>}

                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </div>
    );
}

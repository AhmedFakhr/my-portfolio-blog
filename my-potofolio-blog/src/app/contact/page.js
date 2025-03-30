"use client";
import { useState } from "react";
import "../globals.css";
export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="contact-container">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
            {submitted ? (
                <p className="success-message">Thank you for reaching out! I'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error-message">{errors.name}</p>}

                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}

                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
}

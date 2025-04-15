"use client";
import { useState } from "react";
import "../globals.css";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ submitted: false, loading: false, error: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = "Enter a valid email";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setStatus({ submitted: false, loading: true, error: "" });

            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok) throw new Error(data.error || "Something went wrong");

                setStatus({ submitted: true, loading: false, error: "" });
                setFormData({ name: "", email: "", message: "" });
            } catch (error) {
                setStatus({ submitted: false, loading: false, error: error.message });
            }
        }
    };

    const resetForm = () => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setStatus({ submitted: false, loading: false, error: "" });
    };

    return (
        <div className="contact-container">
            <h1 className="">Contact Me</h1>

            {status.submitted ? (
                <div className="success-message">
                    ✅ Thank you for reaching out! I&apos;ll get back to you soon.
                    <button onClick={resetForm} className="">Send Another Message</button>
                </div>
            ) : status.error ? (
                <div className="error-message">
                    ❌ {status.error}
                    <button onClick={resetForm} className="">Try Again</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error-message">{errors.name}</p>}

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
                    {errors.message && <p className="error-message">{errors.message}</p>}

                    <button type="submit" disabled={status.loading}>
                        {status.loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </div>
    );
}

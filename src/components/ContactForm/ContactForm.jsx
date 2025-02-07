import React from "react";
import { useContact } from "./ContactContext"; // Import the useContact hook
import { InputField } from "./InputFields";

export default function ContactForm() {
  const { formData, setFormData, status, setStatus } = useContact(); // Use context values

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
      } else {
        const data = await res.json();
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="w-[372px] flex flex-col justify-center mx-auto mt-10 p-6 bg-[var(--bg-primary)] rounded-md shadow-lg">
      {status && (
        <div
          className={`p-3 mb-4 rounded-md ${
            status.startsWith("Your message")
              ? "text-green-800 bg-green-100"
              : "text-red-800 bg-red-100"
          }`}
        >
          {status}
        </div>
      )}

      <h2 className="text-[var(--text-primary)] text-2xl mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        >
          Name
        </InputField>

        <InputField
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        >
          Email
        </InputField>

        <InputField
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        >
          Subject
        </InputField>

        <InputField
          type="textarea"
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
        >
          Message
        </InputField>

        <button
          type="submit"
          disabled={status === "Sending..."}
          className="w-full p-2 text-white bg-[var(--primary)] hover:bg-[var(--accent)] rounded-md"
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

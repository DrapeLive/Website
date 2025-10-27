"use client";

import React, { useState } from "react";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!contact) {
      setStatus("Contact information (email or phone number) is required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, contact, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFullName("");
        setContact("");
        setMessage("");
        onClose(); // Close the modal on success
      } else {
        setStatus(`Error: ${data.message || "Failed to send message."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-background rounded-lg shadow-lg max-w-md mx-auto min-w-sm"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Drape</h2>
      {status && (
        <p
          className={`mb-4 text-center ${status.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
        >
          {status}
        </p>
      )}
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm md:text-lg font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contact"
          className="block text-sm md:text-lg font-bold mb-2"
        >
          Contact Number OR Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm md:text-lg font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        ></textarea>
      </div>
      <div className="flex items-center gap-15 justify-between">
        <button className="cursor-pointer hover:underline" onClick={onClose}>
          Cancel
        </button>
        <button className="cursor-pointer bg-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-[15px] hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm md:text-lg md:text-base font-medium">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

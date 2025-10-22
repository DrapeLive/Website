"use client";

import React, { useState } from "react";
import ActionButton from "./ui/Button";

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
      className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
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
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="contact"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Contact Number or Email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          disabled={loading}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        ></textarea>
      </div>
      <div className="flex items-center gap-15 justify-between">
        <button onClick={onClose}>Cancel</button>
        <ActionButton>{loading ? "Sending..." : "Send Message"}</ActionButton>
      </div>
    </form>
  );
};

export default ContactForm;

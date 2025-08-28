import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([]);

  // ✅ Vite environment variable
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Message sent and saved to MongoDB!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        fetchMessages(); // Refresh messages
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Error: " + error.message);
    }

    setIsSubmitting(false);
  };

  // Fetch all messages
  // const fetchMessages = async () => {
  //   try {
  //     const res = await fetch(`${BACKEND_URL}/api/messages`);
  //     const data = await res.json();
  //     setMessages(data);
  //   } catch (err) {
  //     console.error("Error fetching messages:", err);
  //   }
  // };

  // Fetch all messages
const fetchMessages = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/messages`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    setMessages(data);
  } catch (err) {
    console.error("Error fetching messages:", err);
  }
};

  // On component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 space-y-12">
      <div className="max-w-2xl w-full lg:w-2/3 bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Connect
            </span>
          </h2>
        </div>

        {/* Contact Form */}
        <h3 className="text-2xl font-bold mb-6">Send Message</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black py-4 rounded-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Messages List */}
      <div className="max-w-2xl w-full lg:w-2/3 bg-gray-900 rounded-2xl p-8 border border-gray-800">
        <h3 className="text-2xl font-bold mb-6">All Messages</h3>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className="border-b border-gray-700 py-3">
              <p><b>Name:</b> {msg.name}</p>
              <p><b>Email:</b> {msg.email}</p>
              <p><b>Subject:</b> {msg.subject}</p>
              <p><b>Message:</b> {msg.message}</p>
              <p className="text-gray-400 text-sm">{new Date(msg.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Contact;

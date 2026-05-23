import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      // ENV CHECK SAFE
      let API_URL = import.meta.env.VITE_API_URL;

      if (!API_URL) {
        throw new Error("API URL not defined in .env");
      }

      // REMOVE trailing slash issue
      API_URL = API_URL.replace(/\/$/, "");

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      console.log("STATUS:", response.status);
      console.log("DATA:", data);

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Failed to send message");
      }

    } catch (err) {
      console.error(err);
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="title">Get In Touch</h2>

      <div className="contact-card">
        <form onSubmit={send}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>

        {success && (
          <p style={{ color: "#38bdf8", marginTop: "10px" }}>
            Message sent successfully ✅
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
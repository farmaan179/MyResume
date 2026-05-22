import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const API_URL = "https://vercel-backend-byj1.onrender.com";

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert("Email failed ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }

    setLoading(false);
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

      </div>

    </section>
  );
};

export default Contact;
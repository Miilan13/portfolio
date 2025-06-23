import React, { useState } from "react";
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:miilansolanki9955@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-black text-white py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-4 rounded shadow"
          style={{
            maxWidth: "500px",
            backgroundColor: "#111", // dark background
            border: "1px solid #444"
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-control mb-3 bg-dark text-white border border-secondary"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-control mb-3 bg-dark text-white border border-secondary"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="form-control mb-3 bg-dark text-white border border-secondary"
            onChange={handleChange}
            value={formData.message}
          />
          <button type="submit" className="btn btn-primary w-100">
            Send Message via Gmail
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

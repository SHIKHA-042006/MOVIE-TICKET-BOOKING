// src/pages/Contact.jsx
import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any queries about your booking, feel free to reach out!</p>

      <div className="contact-info">
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: support@ticketbooker.com</p>
        <p>🏢 Address: 123 Movie Street, Film City, India</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "90f0ba3e-c8b5-40b3-b327-611eb9beb7b0"); // ✅ real key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div className="contact-container">
      {/* Left Column - Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or
          need help with your rental, our team is here to help.
        </p>
        <h3>📍 Our Location</h3>
        <p>UnniShare HQ, Near Campus Center, Your University, City</p>

        <h3>📧 Email Us</h3>
        <p>support@unnishare.com</p>

        <h3>📱 Call or WhatsApp</h3>
        <p>+91-9876543210</p>

        <h3>📢 Follow Us</h3>
        <p>Instagram | Facebook | Twitter</p>
      </div>

      {/* Right Column - Contact Form */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        {result && <p className="form-result">{result}</p>}
      </div>
    </div>
  );
};

export default Contact;

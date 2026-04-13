import { useState } from "react";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

  };

  return (
    <section className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components
          you need to create a truly happens.
        </p>
      </div>

      {/* Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Write a subject"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message"
            rows="5"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send
        </button>
      </form>

      {/* Info Section */}
      <div className="contact-info">

        <div>
          <h4>Call Us:</h4>
          <p className="highlight">+1-234-567-8900</p>
        </div>

        <div>
          <h4>Hours:</h4>
          <p>Mon–Fri: 11am – 8pm</p>
          <p>Sat, Sun: 9am – 10pm</p>
        </div>

        <div>
          <h4>Our Location:</h4>
          <p>123 Bridge Street</p>
          <p>Nowhere Land, LA 12345</p>
          <p>United States</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;
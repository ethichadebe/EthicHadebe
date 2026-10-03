import { useRef, useState } from "react";
import "./ContactFormPopup.css";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

const ContactFormPopup = ({ isOpen, togglePopup }) => {
  const formRef = useRef(); // To reference the form
  const [messageStatus, setMessageStatus] = useState(""); // For success/error messages

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_bxt242b", // Replace with your EmailJS service ID
        "template_6p4wps9", // Replace with your EmailJS template ID
        formRef.current,
        "user_t0tnxd9vAhzcItPtMF2Tn" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("Message sent successfully!");
          e.target.reset(); // Clear the form fields
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className={`popup ${isOpen ? "active" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={togglePopup}>
          ×
        </button>
        <h2>Get in touch</h2>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        {messageStatus && <p className="message-status">{messageStatus}</p>}
      </div>
    </div>
  );
};

ContactFormPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default ContactFormPopup;

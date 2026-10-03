import { useEffect, useRef, useState } from "react";
import "./ContactFormPopup.css";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";

const ContactFormPopup = ({ isOpen, togglePopup }) => {
  const formRef = useRef(); // To reference the form
  const [messageStatus, setMessageStatus] = useState(""); // For success/error messages

  // Escape closes the popup while it is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") togglePopup();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, togglePopup]);

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
    <>
      {/* Dims the page behind the popup; tapping it closes the popup. */}
      <div
        className={`popup-backdrop ${isOpen ? "active" : ""}`}
        onClick={togglePopup}
        aria-hidden="true"
      />
      <div
        className={`popup ${isOpen ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        aria-hidden={!isOpen}
      >
        <div className="popup-content">
          <button type="button" className="close-btn" onClick={togglePopup} aria-label="Close">
            ×
          </button>
          <h2 id="contact-title">Get in touch</h2>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="from_email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
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
    </>
  );
};

ContactFormPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default ContactFormPopup;

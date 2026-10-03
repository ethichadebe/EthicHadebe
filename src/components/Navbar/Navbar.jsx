import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import menu from '../../assets/Menu.png'
import mail from '../../assets/Mail.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for burger menu
  const [popupOpen, setPopupOpen] = useState(false); // Toggle for mail popup

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close the burger menu after selection
  };

  return (
  <>
<nav className="navbar">
  {/* Logo */}
  <div className="navbar-logo">
    <img src={logo} alt="Logo" className="logo" />
  </div>

  {/* Desktop Menu */}
  <ul className="navbar-menu desktop-menu">
    <li className="navbar-item" onClick={() => handleScroll("home")}>
      Home
    </li>
    <li className="navbar-item" onClick={() => handleScroll("about")}>
      About
    </li>
    <li className="navbar-item" onClick={() => handleScroll("projects")}>
      Projects
    </li>
  </ul>

  {/* Mobile Menu Options */}
  <div className="mobile-options">
    <div className="burger-menu" onClick={toggleMenu}>
      <div className={`line ${menuOpen ? "open" : ""}`}></div>
      <div className={`line ${menuOpen ? "open" : ""}`}></div>
      <div className={`line ${menuOpen ? "open" : ""}`}></div>
    </div>
  </div>

  {/* Mail Icon (Always Visible) */}
  <div className="navbar-mail" onClick={togglePopup}>
    <img src={mail} alt="Mail" className="mail-icon" />
  </div>

  {/* Mobile Dropdown Menu */}
  <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
    <ul className="mobile-menu-list">
      <li className="navbar-item" onClick={() => handleScroll("home")}>
        Home
      </li>
      <li className="navbar-item" onClick={() => handleScroll("about")}>
        About
      </li>
      <li className="navbar-item" onClick={() => handleScroll("projects")}>
        Projects
      </li>
    </ul>
  </div>
</nav>
      {/* Contact Form Popup */}
      <div className={`popup ${popupOpen ? "active" : ""}`}>
        <div className="popup-content">
          <button className="close-btn" onClick={togglePopup}>
            ×
          </button>
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
    )
}

export default Navbar
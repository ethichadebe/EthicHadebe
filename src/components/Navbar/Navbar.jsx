import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'
import menu from '../../assets/menu.png'
import mail from '../../assets/Mail.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for burger menu
  const [popupOpen, setPopupOpen] = useState(false); // Toggle for mail popup

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  return (
  <>
<nav className="navbar">
  {/* Logo */}
  <div className="navbar-logo">
  <Link to='about' smooth={true} offset={-1000} duration={500}>
  <img src={logo} alt="Logo" className="logo" onClick={() => setMenuOpen(false)}/>
</Link>
  </div>

  {/* Desktop Menu */}
  <ul className="navbar-menu desktop-menu">
  <Link to='about' smooth={true} offset={-1000} duration={500}>
    <li className="navbar-item" onClick={() => setMenuOpen(false)}>
      Home
    </li>
    </Link>
    <Link to='about' smooth={true} offset={0} duration={500}>
    <li className="navbar-item" onClick={() => setMenuOpen(false)}>
      About
    </li>
    </Link>
    <Link to='about' smooth={true} offset={700} duration={500}>
    <li className="navbar-item" onClick={() => setMenuOpen(false)}>
      Projects
    </li>
    </Link>
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
    <Link to='about' smooth={true} offset={-1000} duration={500}>
      <li className="navbar-item" onClick={() => setMenuOpen(false)}>
        Home
      </li>
    </Link>
    <Link to='about' smooth={true} offset={-100} duration={500}>
      <li className="navbar-item" onClick={() => setMenuOpen(false)}>
        About
      </li>
    </Link>
    <Link to='about' smooth={true} offset={1200} duration={500}>
      <li className="navbar-item" onClick={() => setMenuOpen(false)}>
        Projects
      </li>
    </Link>
    </ul>
  </div>
</nav>
      {/* Contact Form Popup */}
      <div className={`popup ${popupOpen ? "active" : ""}`}>
        <div className="popup-content">
          <button className="close-btn" onClick={togglePopup}>
            ×
          </button>
          <h2>Get in touch</h2>
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
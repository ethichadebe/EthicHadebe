import { useState } from "react";
import "./Navbar.css";
import { LogoIcon, MailIcon } from "./NavIcons";
import { sectionLink } from "../../scrollToSection";
import ContactFormPopup from "../ContactFormPopup/ContactFormPopup";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for burger menu
  const [popupOpen, setPopupOpen] = useState(false); // Toggle for mail popup

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  const menuItems = SECTIONS.map(({ id, label }) => (
    <li key={id}>
      <a href={`#${id}`} className="navbar-item" onClick={sectionLink(id, closeMenu)}>
        {label}
      </a>
    </li>
  ));

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={sectionLink("home", closeMenu)} aria-label="Ethic Hadebe, back to top">
            <LogoIcon className="nav-icon" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">{menuItems}</ul>

        {/* Mobile Menu Options */}
        <div className="mobile-options">
          <button
            type="button"
            className="burger-menu"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`line ${menuOpen ? "open" : ""}`}></span>
            <span className={`line ${menuOpen ? "open" : ""}`}></span>
            <span className={`line ${menuOpen ? "open" : ""}`}></span>
          </button>
        </div>

        {/* Mail Icon (Always Visible) */}
        <button type="button" className="navbar-mail" onClick={togglePopup} aria-label="Get in touch">
          <MailIcon className="nav-icon" />
        </button>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <ul className="mobile-menu-list">{menuItems}</ul>
        </div>
      </nav>

      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={popupOpen} togglePopup={togglePopup} />
    </>
  );
};

export default Navbar;

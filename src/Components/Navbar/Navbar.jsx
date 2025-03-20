import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Tasty Bites</div>
        
        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
          <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
          <li><a href="#booknow" onClick={closeMenu}>Book Now</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#contacts" onClick={closeMenu}>Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

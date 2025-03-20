import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Tasty Bites</h2>
        </div>

        <ul className="footer-nav">
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#booknow">Book Now</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <p className="footer-text">&copy; 2025 Tasty Bites. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

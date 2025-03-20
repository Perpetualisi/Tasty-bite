import React from "react";
import "./Hero.css";

export default function HeroSection() {
  // Function for smooth scrolling
  const scrollToMenu = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="fade-in">Welcome to Tasty Bites</h1>
        <p className="slide-up">Experience the best flavors in town</p>
        <a href="#menu" onClick={scrollToMenu} className="btn zoom-in">
          View Menu
        </a>
      </div>
    </section>
  );
}

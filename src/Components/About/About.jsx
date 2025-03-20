import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".about-box").forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">👨‍🍳  About Us</h2>
      <div className="about-container">
        
      
        <div className="about-box">
          <video className="about-video" autoPlay loop muted playsInline>
            <source src="/images/Philosophy-new.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Our History</h3>
          <p>
            Founded in 2005, our restaurant has <br /> been serving delicious, locally
            inspired dishes made with love.
          </p>
        </div>

      
        <div className="about-box">
          <video className="about-video" autoPlay loop muted playsInline>
            <source src="/images/Chef-new.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Meet Our Chef</h3>
          <p>
            Chef Michael brings 20 years of experience, <br /> crafting exquisite meals
            with a blend of tradition and innovation.
          </p>
        </div>

        
        <div className="about-box">
          <video className="about-video" autoPlay loop muted playsInline>
            <source src="/images/History-new.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Our Philosophy</h3>
          <p>
            We believe in fresh ingredients,<br /> passionate cooking, and providing
            a memorable dining experience.
          </p>
        </div>
      </div>

      <div className="about-footer">
        <a href="#menu" className="btn">View Menu</a>
      </div>
    </section>
  );
};

export default About;

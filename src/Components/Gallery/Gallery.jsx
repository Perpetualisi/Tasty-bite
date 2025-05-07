import React from "react";
import "./Gallery.css";

const images = [
  "/images/Gallery1.jpg",
  "/images/Gallery2.jpg",
  "/images/Gallery3.jpg",
  "/images/Gallery4.jpg",
  "/images/Gallery5.jpg",
  "/images/Gallery6.jpg"
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

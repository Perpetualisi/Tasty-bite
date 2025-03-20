import React from "react";
import "./Gallery.css";

const images = [
  "/images/Gallery1-min.jpg",
  "/images/Gallery2-min.jpg",
  "/images/Gallery3-min.jpg.jpg",
  "/images/Gallery4-min.jpg",
  "/images/Gallery5-min.jpg",
  "/images/Galley6-min.jpg"
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

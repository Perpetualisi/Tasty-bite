import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    review: "Amazing experience! The food was delicious and the service was outstanding.",
    rating: 5,
    image: "/images/customer1.jpg"
  },
  {
    name: "Jane Smith",
    review: "A wonderful place with great ambiance. Will definitely visit again!",
    rating: 4,
    image: "/images/customer2.jpg"
  },
  {
    name: "Michael Johnson",
    review: "Best restaurant in town. Highly recommended!",
    rating: 5,
    image: "/images/customer3.jpg"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="testimonials">
      <h2>Customer Reviews</h2 >
      <div className="testimonial-slider">
        <div className="testimonial fade-in">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="testimonial-image" />
          <p>"{testimonials[currentIndex].review}"</p>
          <div className="stars">
            {[...Array(5)].map((_, starIndex) => (
              <FaStar
                key={starIndex}
                className={starIndex < testimonials[currentIndex].rating ? "star-filled" : "star-empty"}
              />
            ))}
          </div>
          <p className="author">- {testimonials[currentIndex].name}</p>
        </div>
      </div>
      <div className="testimonial-buttons">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
}

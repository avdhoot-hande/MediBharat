import React from 'react';
import './testimonial.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Excellent service and care! My medical journey was smooth, and the doctors were very professional."
    },
    {
      name: "Jane Smith",
      review: "Affordable treatment and high-quality care. I highly recommend this service."
    }
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Patients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.review}"</p>
            <h5>- {testimonial.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

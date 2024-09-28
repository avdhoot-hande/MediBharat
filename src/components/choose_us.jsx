import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './choose_us.css';

const WhyChooseUs = () => {
  const benefits = [
    "Top-rated hospitals",
    "Certified and experienced doctors",
    "Affordable treatment plans",
    "24/7 customer support",
    "Seamless travel arrangements"
  ];

  return (
    <div className="why-choose-us-section">
      <h2>Why Choose Us</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <FaCheckCircle className="icon" />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

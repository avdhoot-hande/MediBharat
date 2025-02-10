import React from 'react';
import { FaHeart, FaPlane, FaHospital, FaUserMd } from 'react-icons/fa';
import './features.css';

const FeatureCards = () => {
  const features = [
    {
      icon: <FaHeart />,
      title: 'Personalized Care',
      description: 'Get the best personalized medical care from top specialists.'
    },
    {
      icon: <FaPlane />,
      title: 'Easy Travel',
      description: 'We handle all your travel arrangements for a smooth journey.'
    },
    {
      icon: <FaHospital />,
      title: 'Top Hospitals',
      description: 'Receive treatment from internationally recognized hospitals.'
    },
    {
      icon: <FaUserMd />,
      title: 'Expert Doctors',
      description: 'Consult with experienced and trusted medical professionals.'
    }
  ];

  return (
    <div className="feature-section">
      <h2 className="feature-title">Why Choose Us?</h2>
      <div className="feature-cards-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

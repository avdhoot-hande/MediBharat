import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowRightCircle } from 'lucide-react';
import './calltoaction.css';

const CallToAction = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-icon">
          <Info size={40} className="icon-style" />
        </div>
        <div className="cta-content">
          <h2 className="cta-heading">Curious About Who We Are?</h2>
          <p className="cta-text">
            Discover how we're transforming healthcare with innovative solutions and patient-first care. Learn about our vision, our values, and our journey.
          </p>
          <Link to="/about" className="cta-link">
            <button className="cta-button">
              Learn More About Us <ArrowRightCircle className="cta-arrow" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

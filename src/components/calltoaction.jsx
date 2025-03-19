import React from 'react';
import { Link } from 'react-router-dom';
import './calltoaction.css';

const CallToAction = () => {
  return (
    <section className="cta-wrapper">
      <div className="cta-container">
        <h2 className="cta-heading">Want to know about us?</h2>
        <p className="cta-text">Know us better and get better with us!</p>
        <Link to="/about">
          <button className="cta-button">About Us</button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;

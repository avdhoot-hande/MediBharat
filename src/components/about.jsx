import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <section id="about-us" className="about-section">
      {/* About Us Section */}
      


<section id="mission" className="mission-section">
        <div className="mission-box">
        <h2 className="mission-heading">About Us</h2>
    <div className="mission-content reverse-layout"> {/* Reverse layout: text left, image right */}
      <div className="mission-text">
        <p>
          MediBharat is a trusted medical tourism platform connecting international
          patients with top-tier hospitals in India. We provide end-to-end assistance,
          ensuring seamless and affordable medical care.
        </p>
        <ul>
          <li><strong>Accredited Hospitals:</strong> We partner with top-rated medical institutions.</li>
          <li><strong>Expert Specialists:</strong> Access to the best doctors across various fields.</li>
          <li><strong>Personalized Support:</strong> From consultation to recovery, we assist at every step.</li>
          <li><strong>Affordable Healthcare:</strong> High-quality treatments at a fraction of global costs.</li>
        </ul>
        <p>Let us help you access top-notch healthcare with comfort and confidence!</p>
      </div>
      <div className="mission-image">
        <img
          src="https://www.japjitravel.com/blog/wp-content/uploads/2016/11/medical-tourism-e1478168667894.jpg"
          alt="Medical tourism"
        />
      </div>
    </div>
        </div>
      </section>



      {/* Our Mission Section */}
      <section id="mission" className="mission-section">
        <div className="mission-box">
          <h2 className="mission-heading">Our Mission</h2>
          <div className="mission-content">
            <div className="mission-image">
              <img
                src="https://www.medicaltours.care/assets/img/banner/WhyEnroll-200.png"
                alt="Our Mission"
              />
            </div>
            <div className="mission-text">
              <p>
                At MediBharat, our mission is to bridge the gap between international patients
                and India's top-tier healthcare providers. We ensure a seamless, cost-effective,
                and transparent medical tourism experience.
              </p>
              <ul>
                <li><strong>Connecting Patients:</strong> Linking individuals with world-class doctors and hospitals.</li>
                <li><strong>Transparent Healthcare:</strong> Providing clear pricing and multiple treatment options.</li>
                <li><strong>Seamless Experience:</strong> Ensuring stress-free medical travel and treatment.</li>
                <li><strong>Comprehensive Support:</strong> Offering visa assistance, accommodation, and post-care services.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="services-section">
        <div className="services-overlay">
          <h2>Our Services</h2>
          <p>
            Consultation with top doctors and specialists. <br />
            Assistance with medical visa processing. <br />
            Hospital and treatment package selection. <br />
            Travel, accommodation, and local transportation arrangements. <br />
            Post-treatment follow-up and care.
          </p>
        </div>
      </section>

      {/* Why Choose MediBharat Section */}
      <section id="why-choose" className="why-choose-section">
        <h2>Why Choose MediBharat?</h2>
        <div className="why-choose-content">
          {/* Expertise Card */}
          <div className="why-choose-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3481/3481387.png"
              alt="Expertise Icon"
              className="choose-icon"
            />
            <h3>Our Expertise</h3>
            <p>
              <strong>World-Class Healthcare Network –</strong> Partnering with internationally accredited
              hospitals and top-tier medical professionals to ensure advanced treatments with the highest
              standards of care.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="why-choose-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="Commitment Icon"
              className="choose-icon"
            />
            <h3>Our Commitment</h3>
            <p>
              <strong>Affordable & Comprehensive Packages –</strong> Providing cost-effective healthcare
              solutions without compromising on quality, covering medical procedures, travel arrangements,
              comfortable accommodation, and personalized post-treatment care.
            </p>
          </div>

          {/* Support Card */}
          <div className="why-choose-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2965/2965709.png"
              alt="Support Icon"
              className="choose-icon"
            />
            <h3>Our Support</h3>
            <p>
              <strong>24/7 Patient Assistance –</strong> Offering round-the-clock dedicated assistance,
              from initial consultation to full recovery, ensuring a seamless and stress-free medical
              journey for patients.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Contact Boxes */}
          <div className="contact-box">
            <div className="contact-header">Write to Us</div>
            <div className="contact-content">
              <a href="mailto:info@indicure.com">MediBharat@gmail.com</a>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-header">Call Us At</div>
            <div className="contact-content">
              <a href="tel:+919320036777">+91-932-003-6777</a>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-header">Skype</div>
            <div className="contact-content">
              <a href="https://medibharat.com">MediBharat</a>

            </div>
          </div>

          <div className="contact-box">
            <div className="contact-header">Chat with Us</div>
            <div className="contact-content contact-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
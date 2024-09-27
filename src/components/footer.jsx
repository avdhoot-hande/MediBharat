// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#033F63', color: 'white', paddingTop: '50px', paddingBottom: '10px' }}>
      <Container>
        {/* Main Content Row */}
        <Row className="justify-content-center" style={{ paddingBottom: '40px' }}>
          
          {/* Column 1: Logo and Company Info */}
          <Col md={3} className="mb-3 text-center">
            <h5>Our Logo</h5>
            <img 
              src="https://play-lh.googleusercontent.com/62ivGccZTkef_GDhh0bVUwX1hHHDan6KZ0QPljG23cbsr7xovQP8qrBGo6bNngVnFA" // Placeholder for logo
              alt="Company Logo" 
              style={{ width: '175px', height: 'auto' }} 
            />
            <p className='px-5'>We provide exceptional healthcare services and medical tourism solutions across the globe.</p>
          </Col>
          
          {/* Column 2: Quick Links */}
          <Col md={2} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#hospitals" className="text-white">Hospitals</a></li>
              <li><a href="#treatments" className="text-white">Treatments</a></li>
              <li><a href="#testimonials" className="text-white">Testimonials</a></li>
              <li><a href="#about" className="text-white">About Us</a></li>
              <li><a href="#contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>

          {/* Column 3: Popular Services */}
          <Col md={2} className="mb-3">
            <h5>Popular Services</h5>
            <ul className="list-unstyled">
              <li><a href="#cosmetics" className="text-white">Cosmetic Surgery</a></li>
              <li><a href="#cardiology" className="text-white">Cardiology</a></li>
              <li><a href="#dental" className="text-white">Dental Care</a></li>
              <li><a href="#orthopedics" className="text-white">Orthopedics</a></li>
              <li><a href="#fertility" className="text-white">Fertility Treatments</a></li>
            </ul>
          </Col>

          {/* Column 4: Contact Information */}
          <Col md={2} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: medibharat@gmail.com</p>
            <p>Phone: 91+ 7208539140 </p>
            <p>Phone: 91+ 7208539140</p>
          </Col>

          {/* Column 5: Location */}
          <Col md={3} className="mb-3">
            <h5>Our Location</h5>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6890513099775!2d72.82113401119332!3d19.12129248201791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e13ef12003%3A0x5767a74a751ccaf9!2sRajiv%20Gandhi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1727448868156!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-2">4RCF+GF5 MCT's, Rajiv Gandhi Institute of Tecgnology, Juhu Versova Link Rd, behind HDFC Bank, Gharkul Society, Bharat Nagar, Versova, Andheri West, Mumbai, Maharashtra 400053</p>
          </Col>
        </Row>

        {/* Footer Bottom Line */}
        <Row>
          <hr />
          <Col className="text-center" style={{ position: 'relative' }}>
            <p>&copy; {new Date().getFullYear()} Medical. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

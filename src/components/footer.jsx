// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#033F63', color: 'white', paddingTop: '10px' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} MediBharat. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

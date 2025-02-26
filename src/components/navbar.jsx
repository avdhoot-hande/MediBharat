import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import Login from './login';
import './navbar.css';

const CustomNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setLoggedIn(true);
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    setLoggedIn(false);
    setUsername("");
  };

  // Expect a user object here
  const handleLoginSuccess = (user) => {
    setLoggedIn(true);
    setUsername(user.username);
    setShowLoginPopup(false);
    localStorage.setItem('username', user.username);
  };

  return (
    <>
      <div className="top-bar">
        <Container className="d-flex justify-content-between">
          <div>
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
          <div>
            <span className="contact-info">
              <FaPhoneAlt /> +91 7208539140   
            </span>
            <span className="contact-info">
              <FaEnvelope /> medibharat@gmail.com
            </span>
          </div>
        </Container>
      </div>

      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://play-lh.googleusercontent.com/62ivGccZTkef_GDhh0bVUwX1hHHDan6KZ0QPljG23cbsr7xovQP8qrBGo6bNngVnFA"
              alt="MediBharat"
              className="brand-logo"
            />
            <div className="brand-text">
              <h5>Medi<span>Bharat</span>.com</h5>
              <small>Happy Medical Journey</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/hospital"><Nav.Link>Hospitals</Nav.Link></LinkContainer>

              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              {loggedIn ? (
                <Dropdown className="ms-3">
                  <Dropdown.Toggle variant="light">
                    {username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="#saved-doctors">Saved Doctors</Dropdown.Item>
                    <Dropdown.Item href="#saved-hospitals">Saved Hospitals</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="primary" className="ms-3" onClick={() => setShowLoginPopup(true)}>Login</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} onLoginSuccess={handleLoginSuccess} />}
    </>
  );
};

export default CustomNavbar;

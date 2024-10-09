// src/components/navbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import Login from './login';
import './navbar.css'; // Ensure this is importing correctly

const CustomNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('username');
    if (user) {
      setLoggedIn(true);
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setLoggedIn(false);
    setUsername("");
  };

  const handleLoginSuccess = (name) => {
    setLoggedIn(true);
    setUsername(name);
    setShowLoginPopup(false);
    localStorage.setItem('username', name);
  };

  return (
    <>
      <div style={{ backgroundColor: "#033F63", padding: "10px 0", color: "#fff" }}>
        <Container className="d-flex justify-content-between">
          <div>
            <FaFacebookF style={{ marginRight: "15px" }} />
            <FaInstagram style={{ marginRight: "15px" }} />
            <FaYoutube />
          </div>
          <div>
            <span className="me-3">
              <FaPhoneAlt /> +91 7208539140   
            </span>
            <span className="me-3">
              <FaEnvelope /> medibharat@gmail.com
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar with sticky class */}
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="https://play-lh.googleusercontent.com/62ivGccZTkef_GDhh0bVUwX1hHHDan6KZ0QPljG23cbsr7xovQP8qrBGo6bNngVnFA"
              alt="MediBharat"
              style={{ height: "70px", marginRight: "10px" }}
            />
            <div>
              <h5 style={{ marginBottom: "0px", fontWeight: "bold", color: "#D72C16" }}>
                Medi<span style={{ color: "#00A3E0" }}>Bharat</span>.com
              </h5>
              <small>Happy Medical Journey</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/hospital">
                <Nav.Link>Hospitals</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/specialist-doctors">
                <Nav.Link>Our Doctors</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#treatment">Treatment</Nav.Link>
              <Nav.Link href="#our-partners">Our Partners</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              {loggedIn ? (
                <Dropdown className="ms-3">
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
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

      {/* Login Popup */}
      {showLoginPopup && (
        <Login 
          onClose={() => setShowLoginPopup(false)} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}
    </>
  );
};

export default CustomNavbar;

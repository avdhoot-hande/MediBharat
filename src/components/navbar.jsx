import React from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';


const CustomNavbar = ({ user, onLogout, onLoginClick }) => {
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

      <Navbar className="navbar-custom py-0" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo.jpg"
              alt="MediBharat"
              className="brand-logo"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/doctor"><Nav.Link>Doctor</Nav.Link></LinkContainer>
              <Nav.Link href="/about">About Us</Nav.Link>

              {user ? (
                <Dropdown className="ms-3">
                  <Dropdown.Toggle variant="light">{user.name || "User"}</Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <LinkContainer to="/appointments">
                      <Dropdown.Item>Appointments</Dropdown.Item>
                    </LinkContainer>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button variant="primary" className="ms-3" onClick={onLoginClick}>
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

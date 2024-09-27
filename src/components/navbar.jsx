import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <>
      {/* Top Bar */}
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
            <span>
              <FaEnvelope /> medibharat@gmail.com
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
        <Navbar expand="lg" style={{ backgroundColor: "#dae0f2" }}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src="https://play-lh.googleusercontent.com/62ivGccZTkef_GDhh0bVUwX1hHHDan6KZ0QPljG23cbsr7xovQP8qrBGo6bNngVnFA"
              alt="MediBharat"
              style={{ height: "70px", marginRight: "10px" }}
            />
            <div>
              <h5 style={{ marginBottom: "0px", fontWeight: "bold", color: "#D72C16" }}>Medi<span style={{ color: "#00A3E0" }}>Bharat</span>.com</h5>
              <small>Happy Medical Journey</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#treatment">Treatment</Nav.Link>
              <Nav.Link href="#our-doctors">Our Doctors</Nav.Link>
              <Nav.Link href="#our-partners">Our Partners</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

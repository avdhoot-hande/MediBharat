import React from "react";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { NavDropdown } from "react-bootstrap";
import treatmentData from "../data/treatmentData";
import hospitalData from "../data/hospitalData";
import { FaChevronDown } from "react-icons/fa";



// Example treatment data – replace with dynamic source if needed
const treatmentsList = [
  { name: "Knee Replacement", slug: "knee-replacement" },
  { name: "Heart Surgery", slug: "heart-surgery" },
  { name: "Eye Cataract", slug: "eye-cataract" },
  { name: "Dental Implant", slug: "dental-implant" }
];

const CustomNavbar = ({ user, onLogout, onLoginClick }) => {
  const navigate = useNavigate();

  const handleTreatmentSelect = (slug) => {
    navigate(`/treatments/${slug}`);
  };

  return (
    <>
      <div className="navbar-wrapper">
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

        <Navbar className="navbar-custom py-0" expand="lg" sticky="top">
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

                {/* Treatment Dropdown */}
                <NavDropdown title={<>Treatment <FaChevronDown size={12} /></>} id="treatment-dropdown">
                  {treatmentData.map((treatment) => (
                    <NavDropdown.Item
                      key={treatment.id}
                      href={`/treatment/${treatment.id}`}
                    >
                      {treatment.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                {/* Hospital Dropdown */}
                <NavDropdown title={<>Hospital <FaChevronDown size={12} /></>} id="hospital-dropdown">
                  {hospitalData.map((hospital) => (
                    <NavDropdown.Item
                      key={hospital.id}
                      as="span"
                      onClick={() => navigate(`/hospital/${hospital.id}`)}
                    >
                      {hospital.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>


                <LinkContainer to="/about"><Nav.Link>About us</Nav.Link></LinkContainer>

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
      </div>
    </>
  );
};

export default CustomNavbar;

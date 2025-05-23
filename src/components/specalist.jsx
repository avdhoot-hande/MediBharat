import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SpecialistDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate(); // Hook for navigation
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(`${BACKEND_URL}/doctors`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setDoctors(response.data);
        } else {
          console.error("Unexpected response:", response.data);
          setDoctors([]); // fallback
        }
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
        setDoctors([]); // fallback
      });
  }, [BACKEND_URL]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h3 className="text-center mb-4">Specialist Doctors</h3>
      <Slider {...settings}>
        {doctors.map((doctor) => (
          <div key={doctor.d_id} style={{ padding: "10px" }}>
            <Card 
              style={{ width: '16rem', height: '380px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', cursor: 'pointer', padding: '0' }}
              onClick={() => navigate(`/doctor/${doctor.d_id}`)} // Navigate to detail page on click
            >
              <Card.Img 
                variant="top" 
                src={doctor.img} 
                alt={doctor.name} 
                style={{ height: '250px', objectFit: 'cover', objectPosition:'top'}} 
              />
              <Card.Body style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>{doctor.name}</Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: '#555', marginBottom: '10px' }}>
                    <strong>Specialization:</strong> {doctor.specialization} <br />
                    <strong>Hospital:</strong> {doctor.hospital_name} <br />
                    <strong>City:</strong> {doctor.city}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialistDoctors;

// src/components/SpecialistDoctors.jsx
import React from 'react';
import Slider from 'react-slick';
import { Card, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const doctors = [
  { name: "Dr. Raj Sharma", specialty: "Cardiologist", image: "https://via.placeholder.com/150" },
  { name: "Dr. Meera Gupta", specialty: "Orthopedic Surgeon", image: "https://via.placeholder.com/150" },
  { name: "Dr. Aryan Singh", specialty: "Neurologist", image: "https://via.placeholder.com/150" },
  { name: "Dr. Sanya Patel", specialty: "Dermatologist", image: "https://via.placeholder.com/150" },
  { name: "Dr. Rohan Desai", specialty: "Oncologist", image: "https://via.placeholder.com/150" },
  { name: "Dr. Anita Mehta", specialty: "Gastroenterologist", image: "https://via.placeholder.com/150" },
  { name: "Dr. Karan Kapoor", specialty: "Plastic Surgeon", image: "https://via.placeholder.com/150" }
];

const SpecialistDoctors = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h3 className="text-center mb-4">Specialist Doctors</h3>
      <Slider {...settings}>
        {doctors.map((doctor, index) => (
          <div key={index} style={{ padding: "10px" }}> {}
            <Card style={{ width: '15rem', margin: '0 auto' }}> {}
              <Card.Img variant="top" src={doctor.image} alt={doctor.name} />
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>{doctor.specialty}</Card.Text>
                <Button variant="primary">Book Appointment</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialistDoctors;

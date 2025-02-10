import React from 'react';
import Slider from 'react-slick';
import { Card, Button } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const doctors = [
  { name: "Dr. Pro. Rela", specialty: "Liver Transplant", image: "https://www.indiatreatments.com/images/our-doctor/45740044_67466758_Untitled-1.jpg" },
  { name: "Dr. Vishal Rao", specialty: "Onco Surgery", image: "https://www.indiatreatments.com/images/our-doctor/20703771_77699990_Dr._Vishal_Rao_size_x_copy.jpg" },
  { name: "Dr. Ayan Basu", specialty: "Radiation Oncology", image: "https://www.indiatreatments.com/images/our-doctor/61239544_61971684_Untitled-1.jpg" },
  { name: "Dr. MD. Rashid Ayubi", specialty: "Cardiac Surgery", image: "https://www.indiatreatments.com/images/our-doctor/88057480_docktor-psd_(1).png" },
  { name: "Dr. Arul Narayanan", specialty: "Cardiology", image: "https://www.indiatreatments.com/images/our-doctor/80527094_docktor-psd_(1).png" },
  { name: "Dr R Reddy", specialty: "Cardiology", image: "https://www.indiatreatments.com/images/our-doctor/55546207_docktor-psd_(1).png" },
  { name: "Dr. P.K Hazra", specialty: "Cardiology", image: "https://www.indiatreatments.com/images/our-doctor/11718633_docktor-psd_(1).png" },
  { name: "Dr. Anas Inamdar", specialty: "Cardiology", image: "https://www.indiatreatments.com/images/our-doctor/67968470_docktor-psd_(1).png" },
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
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h3 className="text-center mb-4">Specialist Doctors</h3>
      <Slider {...settings}>
        {doctors.map((doctor, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <Card style={{ width: '15rem', margin: '0 auto', textAlign: 'center' }}>
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

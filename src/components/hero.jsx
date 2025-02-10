import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import './hero.css'; // Custom styles

const HeroSection = () => {
  const images = [
    {
      src: 'https://imgs.search.brave.com/uN73aOkoSqfdzzlpbQuXndlXw8oOR_nXg_AhUqFecgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc2/LzM2MF9GXzk1NjE5/NzY3OV8wZHg2ak9T/YjNpQVJUS254eVE4/VWdKdWMyejRJSUpH/NS5qcGc',
      alt: 'Medical Tourism 1',
      caption: 'Welcome to MediBharat',
      description: 'Your trusted medical tourism partner.',
    },
    {
      src: 'https://imgs.search.brave.com/Fz2v4lurYH0otyVZ4sO90GikeGqRUPQXU1xWN52L_1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc3/LzM2MF9GXzk1NjE5/Nzc0MF9vZE5EQnlw/bUFRQmo3VXlDdmdB/TEVEQ1o0S2JZWTNW/Zi5qcGc',
      alt: 'Medical Tourism 2',
      caption: 'Seamless Healthcare Access',
      description: 'Connecting you with world-class hospitals.',
    }
  ];

  return (
    <Carousel interval={3000} controls={true} indicators={true} pause="hover">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 hero-image" src={image.src} alt={image.alt} />
          <Carousel.Caption className="hero-caption">
            <h3>{image.caption}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;

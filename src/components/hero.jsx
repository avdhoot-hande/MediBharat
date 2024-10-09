import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const HeroSection = () => {
  const images = [
    {
      src: 'https://imgs.search.brave.com/uN73aOkoSqfdzzlpbQuXndlXw8oOR_nXg_AhUqFecgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc2/LzM2MF9GXzk1NjE5/NzY3OV8wZHg2ak9T/YjNpQVJUS254eVE4/VWdKdWMyejRJSUpH/NS5qcGc',  // Image from your public folder
      alt: 'Image 1',
      caption: 'First Slide Label',
      description: 'This is a description for the first image.',
        // Custom width
      height: '200px',  // Custom height
    },
    {
      src: 'https://imgs.search.brave.com/uN73aOkoSqfdzzlpbQuXndlXw8oOR_nXg_AhUqFecgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc2/LzM2MF9GXzk1NjE5/NzY3OV8wZHg2ak9T/YjNpQVJUS254eVE4/VWdKdWMyejRJSUpH/NS5qcGc',  // Image from your public folder
      alt: 'Image 1',
      caption: 'First Slide Label',
      description: 'This is a description for the first image.',
        // Custom width
      height: '200px',  // Custom height
    },
    {
      src: 'https://imgs.search.brave.com/uN73aOkoSqfdzzlpbQuXndlXw8oOR_nXg_AhUqFecgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc2/LzM2MF9GXzk1NjE5/NzY3OV8wZHg2ak9T/YjNpQVJUS254eVE4/VWdKdWMyejRJSUpH/NS5qcGc',  // Image from your public folder
      alt: 'Image 1',
      caption: 'First Slide Label',
      description: 'This is a description for the first image.',
        // Custom width
      height: '200px',  // Custom height
    },
    {
      src: 'https://imgs.search.brave.com/uN73aOkoSqfdzzlpbQuXndlXw8oOR_nXg_AhUqFecgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc2/LzM2MF9GXzk1NjE5/NzY3OV8wZHg2ak9T/YjNpQVJUS254eVE4/VWdKdWMyejRJSUpH/NS5qcGc',  // Image from your public folder
      alt: 'Image 1',
      caption: 'First Slide Label',
      description: 'This is a description for the first image.',
        // Custom width
      height: '200px',  // Custom height
    },
    {
      src: 'https://imgs.search.brave.com/uN73aOkoSqfdzzlpbQuXndlXw8oOR_nXg_AhUqFecgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzU2LzE5Lzc2/LzM2MF9GXzk1NjE5/NzY3OV8wZHg2ak9T/YjNpQVJUS254eVE4/VWdKdWMyejRJSUpH/NS5qcGc',  // Image from your public folder
      alt: 'Image 1',
      caption: 'First Slide Label',
      description: 'This is a description for the first image.',
        // Custom width
      height: '200px',  // Custom height
    },
    
  ];

  return (
    <Carousel interval={3000} controls={true} indicators={true} pause="false">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const HeroSection = () => {
  const images = [
    {
      src: 'https://via.placeholder.com/1200x400?text=Image+1',
      alt: 'Image 1',
      caption: 'First Slide Label',
      description: 'This is a description for the first image.'
    },
    {
      src: 'https://via.placeholder.com/1200x400?text=Image+2',
      alt: 'Image 2',
      caption: 'Second Slide Label',
      description: 'This is a description for the second image.'
    },
    {
      src: 'https://via.placeholder.com/1200x400?text=Image+3',
      alt: 'Image 3',
      caption: 'Third Slide Label',
      description: 'This is a description for the third image.'
    },
    {
      src: 'https://via.placeholder.com/1200x400?text=Image+4',
      alt: 'Image 4',
      caption: 'Fourth Slide Label',
      description: 'This is a description for the fourth image.'
    },
    {
      src: 'https://via.placeholder.com/1200x400?text=Image+5',
      alt: 'Image 5',
      caption: 'Fifth Slide Label',
      description: 'This is a description for the fifth image.'
    }
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

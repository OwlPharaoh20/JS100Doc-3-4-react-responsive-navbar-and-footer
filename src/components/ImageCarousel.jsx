// src/components/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel Theme CSS
import '../styles/carousel.css';


const ImageCarousel = () => {
  const images = [
    {
      id: 1,
      src: 'https://via.placeholder.com/800x400?text=Image+1',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/800x400?text=Image+2',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/800x400?text=Image+3',
      alt: 'Image 3',
    },
    // Add more images as needed
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    arrows: true, // Show next/prev arrows
  };

  return (
    <div className="container mx-auto mt-8">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;

// src/components/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel Theme CSS
import '../styles/carousel.css';

import snowHill from "../assets/snow_hill.avif";
import sunset from "../assets/sunset.avif";
import waterbody from "../assets/waterbody.avif";

const ImageCarousel = () => {
  const images = [
    {
      id: 1,
      src: snowHill,
      alt: 'Snow Hill',
    },
    {
      id: 2,
      src: sunset,
      alt: 'Sunset',
    },
    {
      id: 3,
      src: waterbody,
      alt: 'Waterbody',
    },
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
// src/pages/Home.jsx
import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <ImageCarousel />
      <p className="mt-6">
        Welcome to the Home page of our application. Enjoy browsing through our image gallery!
      </p>
    </div>
  );
};

export default Home;

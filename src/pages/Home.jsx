// src/pages/Home.jsx
import React, { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Modal from '../components/Modal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <ImageCarousel />
      <p className="mt-6">
        Welcome to the Home page of our application. Enjoy browsing through our image gallery!
      </p>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-6"
      >
        Show Notification
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Notification">
        <p>This is a sample notification message!</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleCloseModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
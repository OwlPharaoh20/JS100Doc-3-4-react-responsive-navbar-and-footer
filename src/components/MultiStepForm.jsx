// src/components/MultiStepForm.jsx
import React, { useState } from 'react';

const MultiStepForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to move to the next step// Example validation in nextStep
const nextStep = () => {
    // Perform validation for current step
    let isValid = true;
  
    if (currentStep === 1) {
      // Validate Step 1 fields
      if (!formData.firstName || !formData.lastName || !formData.email) {
        isValid = false;
        alert('Please fill out all fields in Step 1');
      }
    } else if (currentStep === 2) {
      // Validate Step 2 fields
      if (!formData.username || !formData.password || !formData.confirmPassword) {
        isValid = false;
        alert('Please fill out all fields in Step 2');
      } else if (formData.password !== formData.confirmPassword) {
        isValid = false;
        alert('Passwords do not match');
      }
    }
  
    if (isValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  

  // Function to move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend here
    console.log('Form submitted:', formData);
    // Optionally, reset the form or navigate to a success page
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    setCurrentStep(1);
    alert('Form submitted successfully!');
  };
  

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className="mb-4">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Account Details</h2>
            <div className="mb-4">
              <label className="block mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border p-2 w-full rounded"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
            <div className="mb-4">
              <p>
                <strong>First Name:</strong> {formData.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {formData.lastName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Username:</strong> {formData.username}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;

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

  const [errors, setErrors] = useState({});


  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    // Clear the error for the current field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
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
     
    //function to include validation before proceeding 
    if (validateStep()) {
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

  if (validateStep()) {
    // All validations passed, process the form data
    console.log('Form submitted:', formData);
    // Optionally reset the form or navigate to a success page
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    setCurrentStep(1);
    setErrors({});
    alert('Form submitted successfully!');
  }
};


  //Create a Validation Function 
  const validateStep = () => {
    let stepErrors = {};
  
    if (currentStep === 1) {
      // Validate Step 1 fields
  
      // First Name
      if (!formData.firstName.trim()) {
        stepErrors.firstName = 'First name is required';
      } else if (formData.firstName.trim().length < 2) {
        stepErrors.firstName = 'First name must be at least 2 characters';
      }
  
      // Last Name
      if (!formData.lastName.trim()) {
        stepErrors.lastName = 'Last name is required';
      } else if (formData.lastName.trim().length < 2) {
        stepErrors.lastName = 'Last name must be at least 2 characters';
      }
  
      // Email Address
      if (!formData.email.trim()) {
        stepErrors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = 'Email address is invalid';
      }
    } else if (currentStep === 2) {
      // Validate Step 2 fields
  
      // Username
      if (!formData.username.trim()) {
        stepErrors.username = 'Username is required';
      } else if (!/^\w{4,}$/.test(formData.username)) {
        stepErrors.username = 'Username must be at least 4 characters and contain only letters, numbers, and underscores';
      }
  
      // Password
      if (!formData.password) {
        stepErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        stepErrors.password = 'Password must be at least 6 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/g.test(formData.password)) {
        stepErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
      }
  
      // Confirm Password
      if (!formData.confirmPassword) {
        stepErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        stepErrors.confirmPassword = 'Passwords do not match';
      }
    }
  
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
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
    className={`border p-2 w-full rounded ${errors.firstName ? 'border-red-500' : ''}`}
    required
  />
  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
</div>

<div className="mb-4">
  <label className="block mb-1">Last Name</label>
  <input
    type="text"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    className={`border p-2 w-full rounded ${errors.lastName ? 'border-red-500' : ''}`}
    required
  />
  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
</div>
 
<div className="mb-4">
  <label className="block mb-1">Email Address</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className={`border p-2 w-full rounded ${errors.email ? 'border-red-500' : ''}`}
    required
  />
  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
    className={`border p-2 w-full rounded ${errors.username ? 'border-red-500' : ''}`}
    required
  />
  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
</div>



<div className="mb-4">
  <label className="block mb-1">Password</label>
  <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    className={`border p-2 w-full rounded ${errors.password ? 'border-red-500' : ''}`}
    required
  />
  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
</div>
 

<div className="mb-4">
  <label className="block mb-1">Confirm Password</label>
  <input
    type="password"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    className={`border p-2 w-full rounded ${errors.confirmPassword ? 'border-red-500' : ''}`}
    required
  />
  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
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

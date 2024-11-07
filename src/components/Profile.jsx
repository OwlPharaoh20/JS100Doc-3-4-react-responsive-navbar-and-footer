import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast

const Profile = () => {
  const dispatch = useDispatch();

  // Get current user data from Redux store, adding a fallback value
  const user = useSelector((state) => state.user) || {};

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    // Safely update formData when user data becomes available
    if (user && Object.keys(user).length > 0) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      try {
        dispatch(updateUser(formData));
        toast.success("Profile updated successfully!");
      } catch (error) {
        toast.error("Failed to update profile. Please try again.");
      }
    }
  };

  return (
    <motion.div
      className="container mx-auto p-6 md:p-8 lg:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Profile Page</h2>
      {user && Object.keys(user).length > 0 ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 w-full rounded md:w-1/2 lg:w-1/3"
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
              className="border p-2 w-full rounded md:w-1/2 lg:w-1/3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full rounded md:w-1/2 lg:w-1/3"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Update Profile
          </motion.button>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}
      <ToastContainer /> // Add ToastContainer
    </motion.div>
  );
};

export default Profile;
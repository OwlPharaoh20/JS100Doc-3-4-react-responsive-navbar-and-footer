import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';
import { motion } from 'framer-motion';

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
      dispatch(updateUser(formData));
    }
  };

  try {
    return (
      <motion.div
        className="container mx-auto p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">Profile Page</h2>
        {user && Object.keys(user).length > 0 ? (
          <form onSubmit={handleSubmit}>
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
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 w-full rounded"
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
      </motion.div>
    );
  } catch (error) {
    console.error("Profile Component Error: ", error);
    return <p>Failed to load profile. Please try again later.</p>;
  }
};

export default Profile;

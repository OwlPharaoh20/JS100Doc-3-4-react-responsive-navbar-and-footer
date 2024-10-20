// src/pages/Dashboard.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for visualization
const sampleData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 700 },
  { name: 'Mar', users: 600 },
  { name: 'Apr', users: 800 },
  { name: 'May', users: 500 },
  { name: 'Jun', users: 900 },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      
      {/* Layout for dashboard cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Total Users</h3>
          <p className="text-2xl font-bold">1,500</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Active Users</h3>
          <p className="text-2xl font-bold">950</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">New Signups</h3>
          <p className="text-2xl font-bold">300</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-2xl font-semibold mb-4">User Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={sampleData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

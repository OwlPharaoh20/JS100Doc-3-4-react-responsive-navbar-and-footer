// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import AuthProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
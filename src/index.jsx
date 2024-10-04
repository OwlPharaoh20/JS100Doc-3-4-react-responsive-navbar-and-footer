// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // Ensure correct import path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

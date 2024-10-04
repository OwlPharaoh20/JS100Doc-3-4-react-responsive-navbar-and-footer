import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            {/* Your Routes and main content */}
            <Routes>
              {/* ... your existing routes */}
            </Routes>
          </div>
          <Footer /> {/* Include Footer */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
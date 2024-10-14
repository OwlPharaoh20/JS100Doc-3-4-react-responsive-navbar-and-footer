// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import MultiStepForm from './components/MultiStepForm';
import SearchableList from './components/SearchableList';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import Accordion from './components/Accordion';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateCartItem = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar cartItemCount={cartItems.length} />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/register" element={<MultiStepForm />} />
              <Route path="/search" element={<SearchableList />} />
              <Route
                path="/products"
                element={
                  <ProductList
                    onAddToCart={handleAddToCart}
                    onUpdateCartItem={handleUpdateCartItem}
                  />
                }
              />
              <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/faq" element={<Accordion />} />
              {/* Add other routes here if needed */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
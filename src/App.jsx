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
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete';
import ErrorBoundary from './components/ErrorBoundary';
import PostsList from './components/PostsList'; // New import
import Dashboard from './pages/Dashboard'; // New import
import Profile from './components/Profile'; // New import
import Weather from './components/Weather'; // Import Weather Component
import DynamicForm from './components/DynamicForm'; // Import Dynamic Form Component
import TodoList from './components/TodoList'; // Import To-Do List Component
import { ToastContainer, toast } from 'react-toastify';
import DataTable from './components/DataTable'; // New import
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to handle updating items in the cart
  const handleUpdateCartItem = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <ErrorBoundary>
      <AuthProvider>
        <ThemeProvider>
          <ToastContainer />
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
                      <PrivateRoute>
                        <ProductList onAddToCart={handleAddToCart} />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <PrivateRoute>
                        <ShoppingCart
                          cartItems={cartItems}
                          onUpdateCartItem={handleUpdateCartItem}
                        />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/faq" element={<Accordion />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/update/:id" element={<Update />} />
                  <Route path="/delete/:id" element={<Delete />} />
                  <Route path="/posts" element={<PostsList />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/weather" element={<Weather />} />
                  <Route path="/dynamic-form" element={<DynamicForm />} />
                  <Route path="/todo" element={<TodoList />} />
                  <Route path="/data-table" element={<DataTable />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
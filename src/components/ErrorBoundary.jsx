// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';

// ErrorBoundary component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Static method to handle errors
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // You can also log the error to an error reporting service
  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
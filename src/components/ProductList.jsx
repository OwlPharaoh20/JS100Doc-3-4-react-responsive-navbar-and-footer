// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  // Sample products
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 99.99,
    image: '/path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 149.99,
    image: '/path/to/image2.jpg',
  },
  // Add more products
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

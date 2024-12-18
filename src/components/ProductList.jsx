import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: 149.99,
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

const ProductList = () => {
  const handleAddToCart = (product) => {
    // Add product to cart logic here
    console.log('Added to cart:', product);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
// src/components/SearchableList.jsx
import React, { useState } from 'react';
import { items } from '../data/items';

const SearchableList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Search Items</h2>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full rounded mb-4"
      />
      {/* Display Filtered Items */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className="border-b py-2">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;

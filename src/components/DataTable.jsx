import React, { useState } from 'react';

const data = [
  { id: 1, name: 'Alice', age: 25, city: 'New York' },
  { id: 2, name: 'Bob', age: 30, city: 'Los Angeles' },
  { id: 3, name: 'Charlie', age: 22, city: 'Chicago' },
];

const DataTable = () => {
  const [filterText, setFilterText] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Data Table</h2>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="p-2" onClick={() => setSortKey('name')}>
              Name {sortKey === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th className="p-2" onClick={() => setSortKey('age')}>
              Age {sortKey === 'age' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th className="p-2" onClick={() => setSortKey('city')}>
              City {sortKey === 'city' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.age}</td>
              <td className="p-2">{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

import React, { useState } from 'react';

const DynamicForm = () => {
  const [category, setCategory] = useState('');
  const [extraFields, setExtraFields] = useState(false);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    if (value === 'business') {
      setExtraFields(true);
    } else {
      setExtraFields(false);
    }
  };

  return (
    <form className="container mx-auto p-4">
      <label className="block mb-2">Category</label>
      <select onChange={handleCategoryChange} className="border p-2 mb-4 rounded">
        <option value="">Select a category...</option>
        <option value="personal">Personal</option>
        <option value="business">Business</option>
      </select>

      {extraFields && (
        <>
          <label className="block mb-2">Business Name</label>
          <input type="text" className="border p-2 mb-4 rounded" />
        </>
      )}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default DynamicForm;

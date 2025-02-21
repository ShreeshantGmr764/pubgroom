import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState('');

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (imageFile && category) {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('category', category);

      try {
        await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImageFile(null);
        setCategory('');
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Page</h1>
      <form onSubmit={handleAddImage} className="w-full max-w-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category (e.g., 1v1)"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add Image
        </button>
      </form>
    </div>
  );
};

export default Admin;
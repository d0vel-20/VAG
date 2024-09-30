// src/components/BlogCard.js
import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ title, description, date, image, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{date}</span>
          <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};




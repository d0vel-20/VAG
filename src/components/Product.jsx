// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-32 object-cover rounded-t-lg mb-4" 
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">Price: ${product.price}</p>
        <p className="text-sm text-gray-500">Date: {product.date}</p>
      </div>
    </div>
  );
}

export default ProductCard;

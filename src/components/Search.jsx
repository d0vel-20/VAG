import React from 'react'

export const Search = () => {
  return (
    <>
                    {/* Search Bar Container */}
        <div className="mt-12 w-full max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white  rounded-md shadow-lg p-2">
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for electronics..."
              className="w-full md:w-3/5 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
            />
            
            {/* Filter Dropdown */}
            <select className="w-full md:w-1/5 mt-2 md:mt-0 md:ml-2 px-4 py-3 rounded-md text-black bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="">All Products</option>
              <option value="air-conditioners">Air Conditioners</option>
              <option value="surveillance-cameras">Surveillance Cameras</option>
              <option value="electronics">Electronics</option>
            </select>
            
            {/* Search Button */}
            <button
              className="w-full md:w-auto mt-2 md:mt-0 md:ml-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
    </>
  )
}

import React, {useState, useEffect} from 'react'
import { products } from '@/data/data'
import { Search } from '@/components/Search'
import ReactPaginate from 'react-paginate';
import ProductCard from '@/components/Product';

const ITEMS_PER_PAGE = 10;

export const ProductPage = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');

  // Filter and Paginate Products
  useEffect(() => {
    // Filter by search, category, and brand
    let filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (categoryFilter ? product.category === categoryFilter : true) &&
      (brandFilter ? product.brand === brandFilter : true)
    );

    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  }, [itemOffset, searchQuery, categoryFilter, brandFilter]);

  // Handle Page Click
  const handlePageClick = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % products.length;
    setItemOffset(newOffset);
  };

  // Handle Search Input
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Handle Category Filter Change
  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);

  // Handle Brand Filter Change
  const handleBrandChange = (e) => setBrandFilter(e.target.value);

  return (
    <div className="container mx-auto px-4">
      
      {/* Search and Filters Section */}
      <div className="mt-8">
        {/* Search Bar */}
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearchChange} 
          placeholder="Search products..." 
          className="border p-3 w-full md:w-1/2 rounded-md mb-4"
        />

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border p-3 rounded-md w-1/2 md:w-1/4"
          >
            <option value="">All Categories</option>
            <option value="Air Conditioners">Air Conditioners</option>
            <option value="Surveillance Cameras">Surveillance Cameras</option>
            <option value="Electronics">Electronics</option>
          </select>

          <select
            value={brandFilter}
            onChange={handleBrandChange}
            className="border p-3 rounded-md w-1/2 md:w-1/4"
          >
            <option value="">All Brands</option>
            <option value="LG">LG</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Dell">Dell</option>
          </select>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {currentItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-[30px] mb-[30px]">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-center space-x-2"}
          previousLinkClassName={"p-2 bg-gray-200 rounded hover:bg-gray-300"}
          nextLinkClassName={"p-2 bg-gray-200 rounded hover:bg-gray-300"}
          disabledClassName={"text-gray-400"}
          activeClassName={"bg-yellow-500 p-2 rounded text-white"}
        />
      </div>
    </div>
  );
};


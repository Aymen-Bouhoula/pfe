import React, { useState } from "react";

const NextPrevious = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Determine products to show on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Handlers for navigation
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="pagination-container">
      <ul className="product-list">
        {currentProducts.map((product, index) => (
          <li key={product.id || index} className="product-item">
            {product.name}
          </li>
        ))}
      </ul>
      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NextPrevious;

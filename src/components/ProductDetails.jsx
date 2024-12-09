import React from "react";
import NextPrevious from "./NextPrevious";

const ProductDetails = ({ product }) => {
  const {
    name,
    image,
    category,
    price,
    countInStock,
  } = product;

  return (
    // <div className="nav">
    <div className="col-4">
    <div className="product-container">
      <img src={image} alt={name} className="product-image" />
      <div className="product-content">
        <div>
          <h1 className="product-title">{name}</h1>
          <p className="product-category">Category: {category}</p>
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
        <div className="product-info">
          <p className={`product-stock ${countInStock > 0 ? "in-stock" : "out-of-stock"}`}>
            {countInStock > 0 ? `In Stock (${countInStock})` : "Out of Stock"}
          </p>
        </div>
        <button className="btn btn-danger">Buy Now </button>
      </div>
    </div>
    </div>
    // </div>
  );
};

export default ProductDetails;

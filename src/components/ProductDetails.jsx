import React, { useState, useEffect } from "react";
import SizeSelector from "./SizeSelector";
import AddToCartButton from "./AddToCartButton";
import "../styles/ProductDetails.css";

function ProductDetails({ productData, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleAddToCartClick = () => {
    if (selectedSize) {
      addToCart(productData, selectedSize);
      setSelectedSize(null);
    } else {
      alert("Please select a size.");
    }
  };

  return (
    <div className="product-details">
      <div className="product-image-container">
        <img
          className="product-image"
          src={productData.imageURL}
          alt={productData.title}
        />
      </div>

      <div className="product-content-container">
        <div className="product-infor">
          <h1 className="product-title">{productData.title}</h1>
          <hr />
          <p className="product-price">${productData.price.toFixed(2)}</p>
          <hr />
          <p className="product-description">{productData.description}</p>
        </div>

        <div className="dynamic-button">
          <SizeSelector
            sizes={productData.sizeOptions}
            selectedSize={selectedSize}
            onSelectSize={handleSizeSelect}
          />
          <AddToCartButton
            onClick={handleAddToCartClick}
            disabled={!selectedSize}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;

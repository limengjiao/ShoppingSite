import React from "react";
import "../styles/AddToCartButton.css";

function AddToCartButton({ onClick, disabled }) {
  return (
    <button
      className="add-to-cart-button"
      onClick={onClick}
      disabled={disabled}
    >
      ADD TO CART
    </button>
  );
}

export default AddToCartButton;

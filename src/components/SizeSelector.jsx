import React from "react";
import "../styles/SizeSelector.css";

function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className="size-selector">
      <div className="size-text">SIZE</div>
      <div className="size-buttons">
        {sizes.map((size) => (
          <button
            key={size.id}
            className={`size-button ${
              selectedSize === size.label ? "selected" : ""
            }`}
            onClick={() => onSelectSize(size.label)}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;

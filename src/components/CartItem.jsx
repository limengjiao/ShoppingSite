import React from "react";
import "../styles/CartItem.css";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img
        src={item.product.imageURL}
        alt={item.product.title}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <p className="cart-item-title">{item.product.title}</p>
        <p className="cart-item-price">
          {item.count} x ${item.product.price.toFixed(2)}
        </p>
        <p className="cart-item-size">Size: {item.size}</p>
      </div>
    </div>
  );
}
export default CartItem;

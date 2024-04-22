import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import CartIcon from "./CartIcon";
import "../styles/MyCart.css";

function MyCart({ cartItems }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasItems = cartItems.length > 0;
  const itemCount = cartItems.reduce((count, item) => count + item.count, 0);
  return (
    <div
      className="my-cart"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cart-overview">
        <span className="cart-text-large">My Cart ({itemCount})</span>
        <span className="cart-icon-small">
          <CartIcon /> ({itemCount})
        </span>
        <div className="cart-dropdown-box">
          {hasItems && isHovered && (
            <div className="cart-dropdown">
              {cartItems.map((item) => (
                <CartItem key={item.product.id + item.size} item={item} />
              ))}
            </div>
          )}
          {!hasItems && isHovered && (
            <p className="empty-cart-message">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default MyCart;

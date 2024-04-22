import React from "react";
import MyCart from "./MyCart";
import "../styles/Header.css";

function Header({ cartItems }) {
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="site-header">
      <MyCart cartCount={cartCount} cartItems={cartItems} />
    </header>
  );
}
export default Header;

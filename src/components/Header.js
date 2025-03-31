import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="animated-background"></div> {/* Live animation */}
      <h1>Houseplant Store</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart </Link>
      </nav>
    </header>
  );
};

export default Header;

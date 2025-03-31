import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Styling to align center

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Houseplant Store</h1>
      <p>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;

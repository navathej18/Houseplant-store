import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import ShoppingCart from "./pages/ShoppingCart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// Importing CSS files for styling
import "./components/Header.css";
import "./components/Footer.css";
import "./pages/LandingPage.css";
import "./pages/ProductListing.css";
import "./pages/ShoppingCart.css";

const AppContent = () => {
  const cart = useSelector((state) => state.cart) || []; // Ensure cart is always an array
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0); // Count total items

  return (
    <div className="app-container">
      <Header cartCount={cartCount} /> {/* Pass total item count to Header */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;

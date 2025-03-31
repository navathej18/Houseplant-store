import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductListing.css"; 

import backgroundImage from "../assets/background.jpg"; 
import aloeVera from "../assets/aloe_vera.jpg";
import snakePlant from "../assets/snake_plant.jpg";
import peaceLily from "../assets/peace_lily.jpg";
import spiderPlant from "../assets/spider_plant.jpg";
import jadePlant from "../assets/jade_plant.jpg";
import bostonFern from "../assets/boston_fern.jpg";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, img: aloeVera, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, img: snakePlant, category: "Air Purifier" },
  { id: 3, name: "Peace Lily", price: 20, img: peaceLily, category: "Flowering" },
  { id: 4, name: "Spider Plant", price: 12, img: spiderPlant, category: "Air Purifier" },
  { id: 5, name: "Jade Plant", price: 18, img: jadePlant, category: "Succulent" },
  { id: 6, name: "Boston Fern", price: 25, img: bostonFern, category: "Fern" },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart || []);

  const addToCart = (plant) => {
    dispatch({ type: "ADD_TO_CART", payload: plant });
  };

  const removeFromCart = (plantId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: plantId });
  };

  return (
    <div 
      className="product-listing" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>Our Houseplants</h2>
      <div className="plant-grid">
        {plants.map((plant) => {
          const isInCart = cart.some((item) => item.id === plant.id);

          return (
            <div key={plant.id} className="plant-card">
              <img src={plant.img} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <div className="btn-container">
                <button 
                  className="add-btn" 
                  onClick={() => addToCart(plant)}
                >
                  Add to Cart
                </button>
                {isInCart && (
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromCart(plant.id)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;

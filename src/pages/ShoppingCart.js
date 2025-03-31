import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ShoppingCart.css"; // Add styling if needed

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart) || []; // Ensure cart is an array
  const dispatch = useDispatch();

  const increaseQuantity = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: cart.find((item) => item.id === id) });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // Calculate total cost considering quantity
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity <= 1}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Items: {totalQuantity}</h3>
          <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
          <button>Checkout (Coming Soon)</button>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

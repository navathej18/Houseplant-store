import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart?.cart || []);

  const removeFromCart = (plantId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: plantId });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

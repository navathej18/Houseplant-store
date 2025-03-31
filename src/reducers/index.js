import { combineReducers } from "redux";
import cartReducer from "./cartReducer"; // Adjust path if needed

const rootReducer = combineReducers({
  cart: cartReducer, // Ensure this matches your Redux state structure
});

export default rootReducer;

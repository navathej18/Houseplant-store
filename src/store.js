import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer"; // Adjust path if needed

const store = createStore(cartReducer);

export default store;

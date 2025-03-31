const initialState = {
  cart: [], // Ensure cart is always an array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map(item => 
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0), // Remove item if quantity reaches 0
      };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    default:
      return state;
  }
};

export default cartReducer;

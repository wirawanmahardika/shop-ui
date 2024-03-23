import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./slice/CartItem.js";
import authReducer from "./slice/Auth.js";

export const store = configureStore({
  reducer: {
    cartItem: cartItemReducer,
    auth: authReducer,
  },
});

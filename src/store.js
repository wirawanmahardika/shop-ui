import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./reduxSlice/CartItem.js";
import authReducer from "./reduxSlice/Auth.js";

export const store = configureStore({
  reducer: {
    cartItem: cartItemReducer,
    auth: authReducer,
  },
});

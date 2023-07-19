import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./reduxSlice/CartItem.js";

export const store = configureStore({
  reducer: {
    cartItem: cartItemReducer,
  },
});

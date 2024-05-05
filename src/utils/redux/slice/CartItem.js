import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartItem = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    editCart: (state, action) => {
      const indexItem = state.findIndex((d) => d.id === action.payload.id);
      state[indexItem].qty = action.payload.qty;
    },
    deleteItem: (state, action) => {
      return [...state.filter((d) => d.id !== action.payload.id)];
    },
    editQuantityCart: (state, action) => {
      const indexItem = state.findIndex((d) => d.id === action.payload.id);
      if (action.payload.edit === false) state[indexItem].qty -= 1;
      else state[indexItem].qty += 1;
    },
    resetCart: () => {
      return [];
    },
  },
});

export const { addToCart, editQuantityCart, editCart, deleteItem, resetCart } =
  cartItem.actions;
export default cartItem.reducer;

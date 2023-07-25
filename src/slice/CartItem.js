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
      const targetItem = state.find((d) => d.id === action.payload.id);
      const filteredState = state.filter((d) => d.id !== action.payload.id);
      targetItem.qty = action.payload.qty;
      filteredState.push(targetItem);
      state = filteredState;
    },
    deleteItem: (state, action) => {
      return (state = state.filter((d) => d.id !== action.payload.id));
    },
    editQuantityCart: (state, action) => {
      const targetItem = state.find((d) => d.id === action.payload.id);
      const filteredState = state.filter((d) => d.id !== action.payload.id);
      if (action.payload.edit === false) {
        targetItem.qty -= 1;
      } else {
        targetItem.qty += 1;
      }
      filteredState.push(targetItem);
      state = filteredState;
    },
  },
});

export const { addToCart, editQuantityCart, editCart, deleteItem } =
  cartItem.actions;
export default cartItem.reducer;

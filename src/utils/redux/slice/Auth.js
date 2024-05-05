import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: null,
  username: null,
  email: null,
  role: null,
  emailValidated: false,
  photo: null,
  balance: null,
  boughItem: 0,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (_, action) => {
      return action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { getUser, logout } = authSlice.actions;
export default authSlice.reducer;

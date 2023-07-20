import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: null,
  username: null,
  email: null,
  role: null,
  emailValidated: false,
  photo: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      return (state = action.payload);
    },
    logout: (state, action) => {
      return (state = initialState);
    },
  },
});

export const { getUser, logout } = authSlice.actions;
export default authSlice.reducer;

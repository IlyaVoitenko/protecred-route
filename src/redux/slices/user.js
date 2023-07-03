import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    info: {},
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state) => {
      state.user.isAuthenticated = true;
    },
    setLogOut: (state) => {
      state.user.isAuthenticated = false;
    },
  },
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;

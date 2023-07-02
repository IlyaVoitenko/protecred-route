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
      state.state.isAuthenticated = true;
    },
    setLogOut: (state) => {
      state.state.isAuthenticated = false;
    },
  },
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;

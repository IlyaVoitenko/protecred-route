import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "collins",
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
  },
});

export const { setIsAuth } = userSlice.actions;

export default userSlice.reducer;

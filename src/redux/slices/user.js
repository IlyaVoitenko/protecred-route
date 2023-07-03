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
    setUserData: (state, { payload }) => {
      state.user.info = payload;
    },
  },
});

export const { setIsAuth, setUserData, setLogOut } = userSlice.actions;

export default userSlice.reducer;

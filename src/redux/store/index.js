import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/user";

export const store = configureStore({
  reducer: {
    user: counterReducer,
  },
});
export default store;

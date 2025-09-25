import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/conterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


export default store;
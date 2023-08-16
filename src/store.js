import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export default store;

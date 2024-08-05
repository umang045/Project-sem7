import { configureStore } from "@reduxjs/toolkit";
import kacheriReducer from "../feature/kacheri/kacheriSlice";
import vibhagReducer from "../feature/vibhag/vibhagSlice";

export const store = configureStore({
  reducer: {
    kacheri: kacheriReducer,
    vibhag: vibhagReducer,
  },
});

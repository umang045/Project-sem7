import { configureStore } from "@reduxjs/toolkit";
import kacheriReducer from "../feature/kacheri/kacheriSlice";
import vibhagReducer from "../feature/vibhag/vibhagSlice";
import vrgikrnReducer from "../feature/vargikrn/VargikrnSlice";

export const store = configureStore({
  reducer: {
    kacheri: kacheriReducer,
    vibhag: vibhagReducer,
    vargikrn: vrgikrnReducer,
  },
});

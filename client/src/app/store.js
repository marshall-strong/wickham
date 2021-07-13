import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import buildingsReducer from "../features/buildings/buildingsSlice";
import kitchensReducer from "../features/kitchens/kitchensSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    buildings: buildingsReducer,
    kitchens: kitchensReducer,
  },
});

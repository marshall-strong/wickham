import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import buildingsReducer from "../features/buildings/buildingsSlice";
import kitchensReducer from "../features/kitchens/kitchensSlice";
import productsReducer from "../features/products/productsSlice";
import recipesReducer from "../features/recipes/recipesSlice";
import paperProductsReducer from "../features/paperProducts/paperProductsSlice";
import foodProductsReducer from "../features/foodProducts/foodProductsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    buildings: buildingsReducer,
    kitchens: kitchensReducer,
    products: productsReducer,
    recipes: recipesReducer,
    paperProducts: paperProductsReducer,
    foodProducts: foodProductsReducer,
  },
});

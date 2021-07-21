import { configureStore } from "@reduxjs/toolkit";
import buildingsReducer from "../features/buildings/buildingsSlice";
import counterReducer from "../features/counter/counterSlice";
import foodProductsReducer from "../features/foodProducts/foodProductsSlice";
import invoicesReducer from "../features/invoices/invoicesSlice";
import kitchensReducer from "../features/kitchens/kitchensSlice";
import ncrItemsReducer from "../features/ncrItems/ncrItemsSlice";
import paperProductsReducer from "../features/paperProducts/paperProductsSlice";
import productsReducer from "../features/products/productsSlice";
import recipesReducer from "../features/recipes/recipesSlice";
import vendorsReducer from "../features/vendors/vendorsSlice";

export const store = configureStore({
  reducer: {
    buildings: buildingsReducer,
    counter: counterReducer,
    foodProducts: foodProductsReducer,
    invoices: invoicesReducer,
    kitchens: kitchensReducer,
    ncrItems: ncrItemsReducer,
    paperProducts: paperProductsReducer,
    products: productsReducer,
    recipes: recipesReducer,
    vendors: vendorsReducer,
  },
});

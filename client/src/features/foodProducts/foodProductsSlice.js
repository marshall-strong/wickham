import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchFoodProduct = createAsyncThunk(
  "foodProducts/fetchFoodProduct",
  async (id) => {
    const response = await axios.get(`/api/v1/food_products/${id}`);
    return response.data;
  }
);

export const fetchFoodProducts = createAsyncThunk(
  "foodProducts/fetchFoodProducts",
  async () => {
    const response = await axios.get(`/api/v1/food_products`);
    return response.data;
  }
);

const foodProductsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (foodProduct) => foodProduct.id,
  // Keep the "all IDs" array sorted based on foodProduct name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = foodProductsAdapter.getInitialState({
  status: {
    fetchFoodProduct: null,
    fetchFoodProducts: null,
  },
});

const foodProductsSlice = createSlice({
  name: "foodProducts",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchFoodProduct
    [fetchFoodProduct.pending]: (state) => {
      state.status.fetchFoodProduct = "pending";
    },
    [fetchFoodProduct.fulfilled]: (state, action) => {
      state.status.fetchFoodProduct = "fulfilled";
      foodProductsAdapter.setAll(state, action.payload.foodProducts);
    },
    [fetchFoodProduct.rejected]: (state) => {
      state.status.fetchFoodProduct = "rejected";
    },
    // fetchFoodProducts
    [fetchFoodProducts.pending]: (state) => {
      state.status.fetchFoodProducts = "pending";
    },
    [fetchFoodProducts.fulfilled]: (state, action) => {
      state.status.fetchFoodProducts = "fulfilled";
      foodProductsAdapter.setAll(state, action.payload.foodProducts);
    },
    [fetchFoodProducts.rejected]: (state) => {
      state.status.fetchFoodProducts = "rejected";
    },
  },
});

export default foodProductsSlice.reducer;

export const {
  selectIds: selectFoodProductIds, // returns the state.ids array.
  selectEntities: selectFoodProductEntities, // returns the state.entities lookup table.
  selectAll: selectAllFoodProducts, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalFoodProducts, // returns the total number of entities being stored in this state.
  selectById: selectFoodProductById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = foodProductsAdapter.getSelectors((state) => state.foodProducts);

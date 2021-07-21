import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchProduct = createAsyncThunk("products/fetchProduct", async (id) => {
  const response = await axios.get(`/api/v1/products/${id}`);
  return response.data;
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`/api/v1/products`);
    return response.data;
  }
);

const productsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (product) => product.id,
  // Keep the "all IDs" array sorted based on product name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = productsAdapter.getInitialState({
  status: {
    fetchProduct: null,
    fetchProducts: null,
  },
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchProduct
    [fetchProduct.pending]: (state) => {
      state.status.fetchProduct = "pending";
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.status.fetchProduct = "fulfilled";
      productsAdapter.setAll(state, action.payload.products);
    },
    [fetchProduct.rejected]: (state) => {
      state.status.fetchProduct = "rejected";
    },
    // fetchProducts
    [fetchProducts.pending]: (state) => {
      state.status.fetchProducts = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status.fetchProducts = "fulfilled";
      productsAdapter.setAll(state, action.payload.products);
    },
    [fetchProducts.rejected]: (state) => {
      state.status.fetchProducts = "rejected";
    },
  },
});

export default productsSlice.reducer;

export const {
  selectIds: selectProductIds, // returns the state.ids array.
  selectEntities: selectProductEntities, // returns the state.entities lookup table.
  selectAll: selectAllProducts, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalProducts, // returns the total number of entities being stored in this state.
  selectById: selectProductById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = productsAdapter.getSelectors((state) => state.products);

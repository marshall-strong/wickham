import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPaperProduct = createAsyncThunk(
  "paperProducts/fetchPaperProduct",
  async (id) => {
    const response = await axios.get(`/api/v1/paper_products/${id}`);
    return response.data;
  }
);

export const fetchPaperProducts = createAsyncThunk(
  "paperProducts/fetchPaperProducts",
  async () => {
    const response = await axios.get(`/api/v1/paper_products`);
    return response.data;
  }
);

const paperProductsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (paperProduct) => paperProduct.id,
  // Keep the "all IDs" array sorted based on paperProduct name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = paperProductsAdapter.getInitialState({
  status: {
    fetchPaperProduct: null,
    fetchPaperProducts: null,
  },
});

const paperProductsSlice = createSlice({
  name: "paperProducts",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchPaperProduct
    [fetchPaperProduct.pending]: (state) => {
      state.status.fetchPaperProduct = "pending";
    },
    [fetchPaperProduct.fulfilled]: (state, action) => {
      state.status.fetchPaperProduct = "fulfilled";
      paperProductsAdapter.setAll(state, action.payload.paperProducts);
    },
    [fetchPaperProduct.rejected]: (state) => {
      state.status.fetchPaperProduct = "rejected";
    },
    // fetchPaperProducts
    [fetchPaperProducts.pending]: (state) => {
      state.status.fetchPaperProducts = "pending";
    },
    [fetchPaperProducts.fulfilled]: (state, action) => {
      state.status.fetchPaperProducts = "fulfilled";
      paperProductsAdapter.setAll(state, action.payload.paperProducts);
    },
    [fetchPaperProducts.rejected]: (state) => {
      state.status.fetchPaperProducts = "rejected";
    },
  },
});

export default paperProductsSlice.reducer;

export const {
  selectIds: selectPaperProductIds, // returns the state.ids array.
  selectEntities: selectPaperProductEntities, // returns the state.entities lookup table.
  selectAll: selectAllPaperProducts, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalPaperProducts, // returns the total number of entities being stored in this state.
  selectById: selectPaperProductById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = paperProductsAdapter.getSelectors((state) => state.paperProducts);

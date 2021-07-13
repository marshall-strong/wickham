import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchVendor = createAsyncThunk("vendors/fetchVendor", async (id) => {
  const response = await axios.get(`/api/v1/vendors/${id}`);
  return response.data;
});

export const fetchVendors = createAsyncThunk(
  "vendors/fetchVendors",
  async () => {
    const response = await axios.get(`/api/v1/vendors`);
    return response.data;
  }
);

const vendorsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (vendor) => vendor.id,
  // Keep the "all IDs" array sorted based on vendor name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = vendorsAdapter.getInitialState({
  status: {
    fetchVendor: null,
    fetchVendors: null,
  },
});

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchVendor
    [fetchVendor.pending]: (state) => {
      state.status.fetchVendor = "pending";
    },
    [fetchVendor.fulfilled]: (state, action) => {
      state.status.fetchVendor = "fulfilled";
      vendorsAdapter.setAll(state, action.payload.vendors);
    },
    [fetchVendor.rejected]: (state) => {
      state.status.fetchVendor = "rejected";
    },
    // fetchVendors
    [fetchVendors.pending]: (state) => {
      state.status.fetchVendors = "pending";
    },
    [fetchVendors.fulfilled]: (state, action) => {
      state.status.fetchVendors = "fulfilled";
      vendorsAdapter.setAll(state, action.payload.vendors);
    },
    [fetchVendors.rejected]: (state) => {
      state.status.fetchVendors = "rejected";
    },
  },
});

export default vendorsSlice.reducer;

export const {
  selectIds: selectVendorIds, // returns the state.ids array.
  selectEntities: selectVendorEntities, // returns the state.entities lookup table.
  selectAll: selectAllVendors, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalVendors, // returns the total number of entities being stored in this state.
  selectById: selectVendorById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = vendorsAdapter.getSelectors((state) => state.vendors);

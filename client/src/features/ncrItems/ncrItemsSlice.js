import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNcrItem = createAsyncThunk(
  "ncrItems/fetchNcrItem",
  async (id) => {
    const response = await axios.get(`/api/v1/ncr_items/${id}`);
    return response.data;
  }
);

export const fetchNcrItems = createAsyncThunk(
  "ncrItems/fetchNcrItems",
  async () => {
    const response = await axios.get(`/api/v1/ncr_items`);
    return response.data;
  }
);

const ncrItemsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (ncrItem) => ncrItem.id,
  // Keep the "all IDs" array sorted alphabetically based on ncrItem.category
  sortComparer: (a, b) => a.category.localeCompare(b.category),
});

const initialState = ncrItemsAdapter.getInitialState({
  status: {
    fetchNcrItem: null,
    fetchNcrItems: null,
  },
});

const ncrItemsSlice = createSlice({
  name: "ncrItems",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchNcrItem
    [fetchNcrItem.pending]: (state) => {
      state.status.fetchNcrItem = "pending";
    },
    [fetchNcrItem.fulfilled]: (state, action) => {
      state.status.fetchNcrItem = "fulfilled";
      ncrItemsAdapter.setAll(state, action.payload.ncrItems);
    },
    [fetchNcrItem.rejected]: (state) => {
      state.status.fetchNcrItem = "rejected";
    },
    // fetchNcrItems
    [fetchNcrItems.pending]: (state) => {
      state.status.fetchNcrItems = "pending";
    },
    [fetchNcrItems.fulfilled]: (state, action) => {
      state.status.fetchNcrItems = "fulfilled";
      ncrItemsAdapter.setAll(state, action.payload.ncrItems);
    },
    [fetchNcrItems.rejected]: (state) => {
      state.status.fetchNcrItems = "rejected";
    },
  },
});

export default ncrItemsSlice.reducer;

export const {
  selectIds: selectNcrItemIds, // returns the state.ids array.
  selectEntities: selectNcrItemEntities, // returns the state.entities lookup table.
  selectAll: selectAllNcrItems, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalNcrItems, // returns the total number of entities being stored in this state.
  selectById: selectNcrItemById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = ncrItemsAdapter.getSelectors((state) => state.ncrItems);

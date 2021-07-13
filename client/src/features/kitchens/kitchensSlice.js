import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchKitchen = createAsyncThunk("kitchens/fetchKitchen", async (id) => {
  const response = await axios.get(`/api/v1/kitchens/${id}`);
  return response.data;
});

export const fetchKitchens = createAsyncThunk(
  "kitchens/fetchKitchens",
  async () => {
    const response = await axios.get(`/api/v1/kitchens`);
    return response.data;
  }
);

const kitchensAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (kitchen) => kitchen.id,
  // Keep the "all IDs" array sorted based on kitchen name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = kitchensAdapter.getInitialState({
  status: {
    fetchKitchen: null,
    fetchKitchens: null,
  },
});

const kitchensSlice = createSlice({
  name: "kitchens",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchKitchen
    [fetchKitchen.pending]: (state) => {
      state.status.fetchKitchen = "pending";
    },
    [fetchKitchen.fulfilled]: (state, action) => {
      state.status.fetchKitchen = "fulfilled";
      kitchensAdapter.setAll(state, action.payload.kitchens);
    },
    [fetchKitchen.rejected]: (state) => {
      state.status.fetchKitchen = "rejected";
    },
    // fetchKitchens
    [fetchKitchens.pending]: (state) => {
      state.status.fetchKitchens = "pending";
    },
    [fetchKitchens.fulfilled]: (state, action) => {
      state.status.fetchKitchens = "fulfilled";
      kitchensAdapter.setAll(state, action.payload.kitchens);
    },
    [fetchKitchens.rejected]: (state) => {
      state.status.fetchKitchens = "rejected";
    },
  },
});

export default kitchensSlice.reducer;

export const {
  selectIds: selectKitchenIds, // returns the state.ids array.
  selectEntities: selectKitchenEntities, // returns the state.entities lookup table.
  selectAll: selectAllKitchens, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalKitchens, // returns the total number of entities being stored in this state.
  selectById: selectKitchenById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = kitchensAdapter.getSelectors((state) => state.kitchens);

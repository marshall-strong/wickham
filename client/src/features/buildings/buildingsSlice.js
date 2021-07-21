import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const fetchBuilding = createAsyncThunk(
  "buildings/fetchBuilding",
  async (id) => {
    const response = await axios.get(`/api/v1/buildings/${id}`);
    return response.data;
  }
);

export const fetchBuildings = createAsyncThunk(
  "buildings/fetchBuildings",
  async () => {
    const response = await axios.get(`/api/v1/buildings`);
    return response.data;
  }
);

const buildingsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (building) => building.id,
  // Keep the "all IDs" array sorted based on building name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = buildingsAdapter.getInitialState({
  status: {
    fetchBuilding: null,
    fetchBuildings: null,
  },
});

const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchBuilding
    [fetchBuilding.pending]: (state) => {
      state.status.fetchBuilding = "pending";
    },
    [fetchBuilding.fulfilled]: (state, action) => {
      state.status.fetchBuilding = "fulfilled";
      buildingsAdapter.setAll(state, action.payload.buildings);
    },
    [fetchBuilding.rejected]: (state) => {
      state.status.fetchBuilding = "rejected";
    },
    // fetchBuildings
    [fetchBuildings.pending]: (state) => {
      state.status.fetchBuildings = "pending";
    },
    [fetchBuildings.fulfilled]: (state, action) => {
      state.status.fetchBuildings = "fulfilled";
      buildingsAdapter.setAll(state, action.payload.buildings);
    },
    [fetchBuildings.rejected]: (state) => {
      state.status.fetchBuildings = "rejected";
    },
  },
});

export default buildingsSlice.reducer;

export const {
  selectIds: selectBuildingIds, // returns the state.ids array.
  selectEntities: selectBuildingEntities, // returns the state.entities lookup table.
  selectAll: selectAllBuildings, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalBuildings, // returns the total number of entities being stored in this state.
  selectById: selectBuildingById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = buildingsAdapter.getSelectors((state) => state.buildings);

import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const buildingsAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (building) => building.id,
  // Keep the "all IDs" array sorted based on building name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const buildingsSlice = createSlice({
  name: "buildings",
  initialState: buildingsAdapter.getInitialState(),
  reducers: {},
  extraReducers: {},
});

export default buildingsSlice.reducer;

export const {
  selectIds: selectBuildingIds, // returns the state.ids array.
  selectEntities: selectBuildingEntities, // returns the state.entities lookup table.
  selectAll: selectAllBuildings, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalBuildings, // returns the total number of entities being stored in this state.
  selectById: selectBuildingById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = buildingsAdapter.getSelectors((state) => state.buildings);

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchRecipe",
  async (id) => {
    const response = await axios.get(`/api/v1/recipes/${id}`);
    return response.data;
  }
);

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await axios.get(`/api/v1/recipes`);
    return response.data;
  }
);

const recipesAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (recipe) => recipe.id,
  // Keep the "all IDs" array sorted based on recipe name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = recipesAdapter.getInitialState({
  status: {
    fetchRecipe: null,
    fetchRecipes: null,
  },
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchRecipe
    [fetchRecipe.pending]: (state) => {
      state.status.fetchRecipe = "pending";
    },
    [fetchRecipe.fulfilled]: (state, action) => {
      state.status.fetchRecipe = "fulfilled";
      recipesAdapter.setAll(state, action.payload.recipes);
    },
    [fetchRecipe.rejected]: (state) => {
      state.status.fetchRecipe = "rejected";
    },
    // fetchRecipes
    [fetchRecipes.pending]: (state) => {
      state.status.fetchRecipes = "pending";
    },
    [fetchRecipes.fulfilled]: (state, action) => {
      state.status.fetchRecipes = "fulfilled";
      recipesAdapter.setAll(state, action.payload.recipes);
    },
    [fetchRecipes.rejected]: (state) => {
      state.status.fetchRecipes = "rejected";
    },
  },
});

export default recipesSlice.reducer;

export const {
  selectIds: selectRecipeIds, // returns the state.ids array.
  selectEntities: selectRecipeEntities, // returns the state.entities lookup table.
  selectAll: selectAllRecipes, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalRecipes, // returns the total number of entities being stored in this state.
  selectById: selectRecipeById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = recipesAdapter.getSelectors((state) => state.recipes);

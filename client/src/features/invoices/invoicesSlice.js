import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoice = createAsyncThunk(
  "invoices/fetchInvoice",
  async (id) => {
    const response = await axios.get(`/api/v1/invoices/${id}`);
    return response.data;
  }
);

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const response = await axios.get(`/api/v1/invoices`);
    return response.data;
  }
);

const invoicesAdapter = createEntityAdapter({
  // this is the default implementation of selectId
  selectId: (invoice) => invoice.id,
  // Keep the "all IDs" array sorted based on invoice.id
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const initialState = invoicesAdapter.getInitialState({
  status: {
    fetchInvoice: null,
    fetchInvoices: null,
  },
});

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: {
    // fetchInvoice
    [fetchInvoice.pending]: (state) => {
      state.status.fetchInvoice = "pending";
    },
    [fetchInvoice.fulfilled]: (state, action) => {
      state.status.fetchInvoice = "fulfilled";
      invoicesAdapter.setAll(state, action.payload.invoices);
    },
    [fetchInvoice.rejected]: (state) => {
      state.status.fetchInvoice = "rejected";
    },
    // fetchInvoices
    [fetchInvoices.pending]: (state) => {
      state.status.fetchInvoices = "pending";
    },
    [fetchInvoices.fulfilled]: (state, action) => {
      state.status.fetchInvoices = "fulfilled";
      invoicesAdapter.setAll(state, action.payload.invoices);
    },
    [fetchInvoices.rejected]: (state) => {
      state.status.fetchInvoices = "rejected";
    },
  },
});

export default invoicesSlice.reducer;

export const {
  selectIds: selectInvoiceIds, // returns the state.ids array.
  selectEntities: selectInvoiceEntities, // returns the state.entities lookup table.
  selectAll: selectAllInvoices, // maps over the state.ids array, and returns an array of entities in the same order.
  selectTotal: selectTotalInvoices, // returns the total number of entities being stored in this state.
  selectById: selectInvoiceById, // given the state and an entity ID, returns the entity with that ID or undefined.
} = invoicesAdapter.getSelectors((state) => state.invoices);

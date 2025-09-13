import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

// Async thunks
export const getLocation = createAsyncThunk(
  "location/getAllLocation",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/location");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Location getting failed"
      );
    }
  }
);

export const createLocation = createAsyncThunk(
  "location/createLocation",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/location", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Location creating failed"
      );
    }
  }
);

export const deleteLocation = createAsyncThunk(
  "location/deleteLocation",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/location/${id}`);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Deleting location failed"
      );
    }
  }
);

const initialState = {
  getLocationData: [],
  getLocationLoading: false,
  getLocationError: null,
  createLocationData: null,
  createLocationLoading: false,
  createLocationError: null,
  deleteLocationData: null,
  deleteLocationLoading: false,
  deleteLocationError: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get locations
    builder
      .addCase(getLocation.pending, (state) => {
        state.getLocationLoading = true;
        state.getLocationError = null;
      })
      .addCase(getLocation.fulfilled, (state, action) => {
        state.getLocationLoading = false;
        state.getLocationData = action.payload;
      })
      .addCase(getLocation.rejected, (state, action) => {
        state.getLocationLoading = false;
        state.getLocationError = action.payload;
      });

    // Create location
    builder
      .addCase(createLocation.pending, (state) => {
        state.createLocationLoading = true;
        state.createLocationError = null;
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.createLocationLoading = false;
        state.createLocationData = action.payload;
      })
      .addCase(createLocation.rejected, (state, action) => {
        state.createLocationLoading = false;
        state.createLocationError = action.payload;
      });

    // Delete location
    builder
      .addCase(deleteLocation.pending, (state) => {
        state.deleteLocationLoading = true;
        state.deleteLocationError = null;
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.deleteLocationLoading = false;
        state.deleteLocationData = action.payload;
      })
      .addCase(deleteLocation.rejected, (state, action) => {
        state.deleteLocationLoading = false;
        state.deleteLocationError = action.payload;
      });
  },
});

export default locationSlice.reducer;

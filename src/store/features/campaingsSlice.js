import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getAllCampaings = createAsyncThunk(
  "campaings/getAllCampaings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/campaings");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Campings getting failed"
      );
    }
  }
);

export const createCampings = createAsyncThunk(
  "campaings/createCampings",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/campaings", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Campings creating failed"
      );
    }
  }
);

export const deleteCampings = createAsyncThunk(
  "campaings/deleteCampings",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/campaings/${id}`);
      return { id, ...response.data }; // return id so we can remove from state
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Campings deleting failed"
      );
    }
  }
);

const initialState = {
  getAllCampaingsData: null,
  getAllCampaingsLoading: false,
  getAllCampaingsError: null,

  createCampingsData: null,
  createCampingsLoading: false,
  createCampingsError: null,

  deleteCampingsData: null,
  deleteCampingsLoading: false,
  deleteCampingsError: null,
};

const campaingsSlice = createSlice({
  name: "campaings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all
    builder
      .addCase(getAllCampaings.pending, (state) => {
        state.getAllCampaingsLoading = true;
        state.getAllCampaingsError = null;
      })
      .addCase(getAllCampaings.fulfilled, (state, action) => {
        state.getAllCampaingsLoading = false;
        state.getAllCampaingsData = action.payload;
      })
      .addCase(getAllCampaings.rejected, (state, action) => {
        state.getAllCampaingsLoading = false;
        state.getAllCampaingsError = action.payload;
      });

    // Create
    builder
      .addCase(createCampings.pending, (state) => {
        state.createCampingsLoading = true;
        state.createCampingsError = null;
      })
      .addCase(createCampings.fulfilled, (state, action) => {
        state.createCampingsLoading = false;
        state.createCampingsData = action.payload;
      })
      .addCase(createCampings.rejected, (state, action) => {
        state.createCampingsLoading = false;
        state.createCampingsError = action.payload;
      });

    // Delete
    builder
      .addCase(deleteCampings.pending, (state) => {
        state.deleteCampingsLoading = true;
        state.deleteCampingsError = null;
      })
      .addCase(deleteCampings.fulfilled, (state, action) => {
        state.deleteCampingsLoading = false;
        state.deleteCampingsData = action.payload;
      })
      .addCase(deleteCampings.rejected, (state, action) => {
        state.deleteCampingsLoading = false;
        state.deleteCampingsError = action.payload;
      });
  },
});

export default campaingsSlice.reducer;

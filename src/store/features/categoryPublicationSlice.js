import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getAllTopicsPublication = createAsyncThunk(
  "publication/getAllTopicsPublication",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/categoryPublication");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

export const createTopicsPublication = createAsyncThunk(
  "publication/createPublicationCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/categoryPublication", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create topics"
      );
    }
  }
);

export const deleteTopicsPublication = createAsyncThunk(
  "publication/deletePublicationTopics",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/categoryPublication/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete category"
      );
    }
  }
);

const initialState = {
  topicsCategoryData: null,
  topicsCategoryLoading: false,
  topicsCategoryError: null,
  createTopicsCategoryData: null,
  createTopicsPublicationLoading: false,
  createTopicsPublicationError: null,
  deleteTopicsPublicationData: null,
  deleteTopicsPublicationLoading: false,
  deleteTopicsPublicationError: null,
};

const categoryPublicationSlice = createSlice({
  name: "categoryPublication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTopicsPublication.pending, (state) => {
        state.topicsCategoryLoading = true;
        state.topicsCategoryError = null;
      })
      .addCase(getAllTopicsPublication.fulfilled, (state, action) => {
        state.topicsCategoryLoading = false;
        state.topicsCategoryData = action.payload;
      })
      .addCase(getAllTopicsPublication.rejected, (state, action) => {
        state.topicsCategoryLoading = false;
        state.topicsCategoryError = action.payload;
      })

      .addCase(createTopicsPublication.pending, (state) => {
        state.createTopicsPublicationLoading = true;
        state.createTopicsPublicationError = null;
      })
      .addCase(createTopicsPublication.fulfilled, (state, action) => {
        state.createTopicsPublicationLoading = false;
        state.createTopicsCategoryData = action.payload;
      })
      .addCase(createTopicsPublication.rejected, (state, action) => {
        state.createTopicsPublicationLoading = false;
        state.createTopicsPublicationError = action.payload;
      })

      .addCase(deleteTopicsPublication.pending, (state) => {
        state.deleteTopicsPublicationLoading = true;
        state.deleteTopicsPublicationError = null;
      })
      .addCase(deleteTopicsPublication.fulfilled, (state, action) => {
        state.deleteTopicsPublicationLoading = false;
        state.deleteTopicsPublicationData = action.payload;
      })
      .addCase(deleteTopicsPublication.rejected, (state, action) => {
        state.deleteTopicsPublicationLoading = false;
        state.deleteTopicsPublicationError = action.payload;
      });
  },
});

export default categoryPublicationSlice.reducer;

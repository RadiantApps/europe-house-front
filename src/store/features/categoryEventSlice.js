import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getAllCategoryEvent = createAsyncThunk(
  "category-event/getAllCategoryEvent",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/category-event");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Category Event");
    }
  }
);

export const createCategoryEvent = createAsyncThunk(
  "category-event/createCategoryEvent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/category-event", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Category event failed to create"
      );
    }
  }
);

export const deleteCategoryEvent = createAsyncThunk(
  "category-event/deleteCategoryEvent",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/category-event/${id}`);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Category event failed to delete"
      );
    }
  }
);

const initialState = {
  getAllCategoryEventData: null,
  getAllCategoryEventLoading: false,
  getAllCategoryEventError: null,

  createCategoryEventData: null,
  createCategoryEventLoading: false,
  createCategoryEventError: null,

  deleteCategoryEventData: null,
  deleteCategoryEventLoading: false,
  deleteCategoryEventError: null,
};

const categoryEventSlice = createSlice({
  name: "categoryevent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getAllCategoryEvent
      .addCase(getAllCategoryEvent.pending, (state) => {
        state.getAllCategoryEventLoading = true;
        state.getAllCategoryEventError = null;
      })
      .addCase(getAllCategoryEvent.fulfilled, (state, action) => {
        state.getAllCategoryEventLoading = false;
        state.getAllCategoryEventData = action.payload;
      })
      .addCase(getAllCategoryEvent.rejected, (state, action) => {
        state.getAllCategoryEventLoading = false;
        state.getAllCategoryEventError = action.payload;
      })

      // createCategoryEvent
      .addCase(createCategoryEvent.pending, (state) => {
        state.createCategoryEventLoading = true;
        state.createCategoryEventError = null;
      })
      .addCase(createCategoryEvent.fulfilled, (state, action) => {
        state.createCategoryEventLoading = false;
        state.createCategoryEventData = action.payload;
      })
      .addCase(createCategoryEvent.rejected, (state, action) => {
        state.createCategoryEventLoading = false;
        state.createCategoryEventError = action.payload;
      })

      // deleteCategoryEvent
      .addCase(deleteCategoryEvent.pending, (state) => {
        state.deleteCategoryEventLoading = true;
        state.deleteCategoryEventError = null;
      })
      .addCase(deleteCategoryEvent.fulfilled, (state, action) => {
        state.deleteCategoryEventLoading = false;
        state.deleteCategoryEventData = action.payload;
      })
      .addCase(deleteCategoryEvent.rejected, (state, action) => {
        state.deleteCategoryEventLoading = false;
        state.deleteCategoryEventError = action.payload;
      });
  },
});

export default categoryEventSlice.reducer;

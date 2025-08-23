import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

// --- Async Thunks ---

// Get all blog categories
export const getAllBlogCategory = createAsyncThunk(
  "blogCategory/getAllCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/category-blog");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

// Create a blog category
export const createBlogCategory = createAsyncThunk(
  "blogCategory/createBlogCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/category-blog", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create category"
      );
    }
  }
);

// Delete a blog category
export const deleteBlogCategory = createAsyncThunk(
  "blogCategory/deleteBlogCategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/category-blog/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete category"
      );
    }
  }
);

// --- Initial State ---
const initialState = {
  blogCategoryData: null,
  blogCategoryLoading: false,
  blogCategoryError: null,

  createBlogCategoryData: null,
  createBlogCategoryLoading: false,
  createBlogCategoryError: null,

  deleteBlogCategoryData: null,
  deleteBlogCategoryLoading: false,
  deleteBlogCategoryError: null,
};

// --- Slice ---
const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // --- Get all categories ---
      .addCase(getAllBlogCategory.pending, (state) => {
        state.blogCategoryLoading = true;
        state.blogCategoryError = null;
      })
      .addCase(getAllBlogCategory.fulfilled, (state, action) => {
        state.blogCategoryData = action.payload;
        state.blogCategoryLoading = false;
      })
      .addCase(getAllBlogCategory.rejected, (state, action) => {
        state.blogCategoryError = action.error.message;
        state.blogCategoryLoading = false;
      })

      // --- Create category ---
      .addCase(createBlogCategory.pending, (state) => {
        state.createBlogCategoryLoading = true;
        state.createBlogCategoryError = null;
      })
      .addCase(createBlogCategory.fulfilled, (state, action) => {
        state.createBlogCategoryData = action.payload;
        state.createBlogCategoryLoading = false;
      })
      .addCase(createBlogCategory.rejected, (state, action) => {
        state.createBlogCategoryError = action.error.message;
        state.createBlogCategoryLoading = false;
      })

      // --- Delete category ---
      .addCase(deleteBlogCategory.pending, (state) => {
        state.deleteBlogCategoryLoading = true;
        state.deleteBlogCategoryError = null;
      })
      .addCase(deleteBlogCategory.fulfilled, (state, action) => {
        state.deleteBlogCategoryData = action.payload;
        state.deleteBlogCategoryLoading = false;
      })
      .addCase(deleteBlogCategory.rejected, (state, action) => {
        state.deleteBlogCategoryError = action.error.message;
        state.deleteBlogCategoryLoading = false;
      });
  },
});

export default blogCategorySlice.reducer;

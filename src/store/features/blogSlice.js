import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getAllBlogs = createAsyncThunk("blog/userBlogs", async () => {
  try {
    const response = await axiosInstance.get("/blog");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Blog getting failed");
  }
});

export const createBlogs = createAsyncThunk(
  "blog/createBlogs",
  async (data) => {
    try {
      const response = await axiosInstance.post("/blog", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Blog creating failed");
    }
  }
);

export const deleteBlogs = createAsyncThunk("blog/deleteBlogs", async (id) => {
  try {
    const response = await axiosInstance.delete(`/blog/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Deleting blog failed");
  }
});

const initialState = {
  blogsData: null,
  blogsLoading: false,
  blogsError: null,

  createBlogsData: null,
  createBlogsLoading: false,
  createBlogsError: null,

  deleteBlogsData: null,
  deleteBlogsLoading: false,
  deleteBlogsError: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: () => {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.blogsError = action.error.message;
        state.blogsLoading = false;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogsData = action.payload;
        state.blogsLoading = false;
      })
      .addCase(getAllBlogs.pending, (state) => {
        state.blogsLoading = true;
        state.blogsError = null;
      })
      .addCase(createBlogs.rejected, (state, action) => {
        state.createBlogsError = action.error.message;
        state.createBlogsLoading = false;
      })
      .addCase(createBlogs.fulfilled, (state, action) => {
        state.createBlogsData = action.payload;
        state.createBlogsLoading = false;
      })
      .addCase(createBlogs.pending, (state) => {
        state.createBlogsLoading = true;
        state.createBlogsError = null;
      })
      .addCase(deleteBlogs.rejected, (state, action) => {
        state.deleteBlogsLoading = false;
        state.deleteBlogsError = action.error.message;
      })
      .addCase(deleteBlogs.fulfilled, (state, action) => {
        state.deleteBlogsData = action.payload;
        state.deleteBlogsLoading = false;
      })
      .addCase(deleteBlogs.pending, (state) => {
        state.deleteBlogsLoading = true;
        state.deleteBlogsError = null;
      });
  },
});

export default blogSlice.reducer;

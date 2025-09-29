import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const createBlogBanner = createAsyncThunk(
  "blogdetails/createBlogBanner",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.post(
        `/blog-details/createBanner/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Create blog failed");
    }
  }
);

export const getBannerBlogDetails = createAsyncThunk(
  "blogdetails/getBannerBlogDetails",
  async (id) => {
    try {
      const response = await axiosInstance.get(`/blog-details/getBanner/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Getting banner failed");
    }
  }
);

export const updateBanner = createAsyncThunk(
  "blogdetails/updateBanner",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.put(
        `/blog-details/updateBanner/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Updateing blog failed");
    }
  }
);

export const createBlogDetails = createAsyncThunk(
  "blogdetails/createBlogDetails",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.post(
        `/blog-details/createBlogDetail/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Creating blog failed");
    }
  }
);

export const getBlogDetails = createAsyncThunk(
  "blogDetails/getBlogDetails",
  async (id) => {
    try {
      const response = await axiosInstance.get(
        `/blog-details/getBlogDetails/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "getting blog detials failed"
      );
    }
  }
);

export const deletePhotoGalery = createAsyncThunk(
  "blogDetails/deletePhotoGalery",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.post(
        `/blog-details/deletePhotoGalery/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Error deleting photo galery"
      );
    }
  }
);

export const deleteBlogDetails = createAsyncThunk(
  "blogDetails/deleteBlogDetails",
  async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/blog-details/deleteBlogDetails/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Error deleting blog details"
      );
    }
  }
);

export const updateBlogDetail = createAsyncThunk(
  "blogDetails/updateBlogDetails",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        "/blog-details/updateBlogDetials",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Error updating blog details"
      );
    }
  }
);

export const updateOrder = createAsyncThunk(
  "blogDetails/updateOrder",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        "/blog-details/updateOrder",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Error updateing order");
    }
  }
);

const initialState = {
  getBannerData: null,
  getBannerLoading: false,
  getBannerError: null,
  createBannerDetailData: null,
  createBannerDetailLoading: false,
  createBannerDetailError: null,
  updateBannerData: null,
  updateBannerLoading: false,
  updateBannerError: null,
  createBlogDetailsData: null,
  createBlogDetailsLoading: false,
  createBlogDetailsError: null,
  getBlogDetailsData: null,
  getBlogDetailsLoading: false,
  getBlogDetailsError: null,
  deletePhotoGaleryData: null,
  deletePhotoGaleryLoading: false,
  deletePhotoGaleryError: null,
  deleteBlogDetailsData: null,
  deleteBlogDetailsLoading: false,
  deleteBlogDetailsError: null,
  updateBlogDetailData: null,
  updateBlogDetailLoading: false,
  updateBlogDetailError: null,
  updateOrderData: null,
  updateOrderLoading: false,
  updateOrderError: null,
};

const blogDetailsSlice = createSlice({
  name: "blogdetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateOrder.rejected, (state, action) => {
        state.updateOrderLoading = false;
        state.updateOrderError = action.error.message;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.updateOrderData = action.payload;
        state.updateOrderLoading = false;
      })
      .addCase(updateOrder.pending, (state) => {
        state.updateOrderLoading = true;
        state.updateOrderError = null;
      })
      .addCase(updateBlogDetail.rejected, (state, action) => {
        state.updateBlogDetailError = action.error.message;
        state.updateBlogDetailLoading = false;
      })
      .addCase(updateBlogDetail.fulfilled, (state, action) => {
        state.updateBlogDetailData = action.payload;
        state.updateBlogDetailLoading = false;
      })
      .addCase(updateBlogDetail.pending, (state) => {
        state.updateBlogDetailLoading = true;
        state.updateBlogDetailError = null;
      })
      .addCase(deleteBlogDetails.rejected, (state, action) => {
        state.deleteBlogDetailsError = action.error.message;
        state.deleteBlogDetailsLoading = false;
      })
      .addCase(deleteBlogDetails.fulfilled, (state, action) => {
        state.deleteBlogDetailsData = action.payload;
        state.deleteBlogDetailsLoading = false;
      })
      .addCase(deleteBlogDetails.pending, (state) => {
        state.deleteBlogDetailsLoading = true;
        state.deleteBlogDetailsError = null;
      })
      .addCase(deletePhotoGalery.rejected, (state, action) => {
        state.deletePhotoGaleryError = action.error.message;
        state.deletePhotoGaleryLoading = false;
      })
      .addCase(deletePhotoGalery.fulfilled, (state, action) => {
        state.deletePhotoGaleryData = action.payload;
        state.deletePhotoGaleryLoading = false;
      })
      .addCase(deletePhotoGalery.pending, (state) => {
        state.deletePhotoGaleryLoading = true;
        state.deletePhotoGaleryError = null;
      })
      .addCase(getBlogDetails.rejected, (state, action) => {
        state.getBlogDetailsError = action.error.message;
        state.getBlogDetailsLoading = false;
      })
      .addCase(getBlogDetails.fulfilled, (state, action) => {
        state.getBlogDetailsData = action.payload;
        state.getBlogDetailsError = null;
      })
      .addCase(getBlogDetails.pending, (state) => {
        state.getBlogDetailsLoading = true;
        state.getBlogDetailsError = null;
      })
      .addCase(createBlogDetails.rejected, (state, action) => {
        state.createBlogDetailsLoading = false;
        state.createBlogDetailsError = action.error.message;
      })
      .addCase(createBlogDetails.fulfilled, (state, action) => {
        state.createBlogDetailsData = action.fulfilled;
        state.createBlogDetailsError = null;
      })
      .addCase(createBlogDetails.pending, (state) => {
        state.createBannerDetailLoading = true;
        state.createBannerDetailError = null;
      })
      .addCase(updateBanner.rejected, (state, action) => {
        state.updateBannerError = action.error.message;
        state.updateBannerLoading = false;
      })
      .addCase(updateBanner.fulfilled, (state, action) => {
        state.updateBannerData = action.payload;
        state.updateBannerLoading = false;
      })
      .addCase(updateBanner.pending, (state) => {
        state.updateBannerLoading = true;
        state.updateBannerError = null;
      })
      .addCase(getBannerBlogDetails.rejected, (state, action) => {
        state.getBannerLoading = false;
        state.getBannerError = action.error.message;
      })
      .addCase(getBannerBlogDetails.fulfilled, (state, action) => {
        state.getBannerData = action.payload;
        state.getBannerLoading = false;
      })
      .addCase(getBannerBlogDetails.pending, (state) => {
        state.getBannerLoading = true;
        state.getBannerError = null;
      })
      .addCase(createBlogBanner.rejected, (state, action) => {
        state.createBannerDetailError = action.error.message;
        state.createBannerDetailLoading = false;
      })
      .addCase(createBlogBanner.fulfilled, (state, action) => {
        state.createBannerDetailData = action.payload;
        state.createBannerDetailLoading = false;
      })
      .addCase(createBlogBanner.pending, (state) => {
        state.createBannerDetailLoading = true;
        state.createBannerDetailError = null;
      });
  },
});

export default blogDetailsSlice.reducer;

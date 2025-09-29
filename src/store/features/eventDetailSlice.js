import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const createEventBanner = createAsyncThunk(
  "eventDetails/crreateEventBanner",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.post(
        `/event-details/createBanner/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.message || "Create event banner failed"
      );
    }
  }
);

export const getEventBanner = createAsyncThunk(
  "eventDetails/getEventBanner",
  async (id) => {
    try {
      const response = await axiosInstance.get(
        `/event-details/getBanner/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Get banner failed");
    }
  }
);

export const updateEventBanner = createAsyncThunk(
  "eventDetails/updateBanner",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.put(
        `/event-details/updateBanner/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Updateing blog failed");
    }
  }
);

export const createEventDetails = createAsyncThunk(
  "eventDetails/createEventDetails",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.post(
        `/event-details/createEventDetail/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "");
    }
  }
);

export const getEventDetails = createAsyncThunk(
  "eventDetails/getEventDetails",
  async (id) => {
    try {
      const response = await axiosInstance.get(
        `/event-details/getEventDetails/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "");
    }
  }
);

export const deleteEventDetails = createAsyncThunk(
  "eventDetails/deleteEventDetails",
  async (id) => {
    try {
      const response = await axiosInstance.delete(
        `/event-details/deleteEventDetails/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "");
    }
  }
);

export const updateOrder = createAsyncThunk(
  "eventDetails/updateOrder",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        "/event-details/updateOrder",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Error updateing order");
    }
  }
);

export const updateEventDetail = createAsyncThunk(
  "eventDetails/updateEventDetails",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        "/event-details/updateEventDetials",
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

export const deletePhotoGalery = createAsyncThunk(
  "eventDetails/deletePhotoGallery",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.post(
        `/event-details/deletePhotoGalery/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "");
    }
  }
);

const initialState = {
  createBannerDetailData: null,
  createBannerDetailLoading: false,
  createBannerDetailError: null,
  getBannerData: null,
  getBannerLoading: false,
  getBannerError: null,
  updateBannerData: false,
  updateBannerLoading: false,
  updateBannerError: null,
  createEventDetailsData: null,
  createEventDetailsLoading: false,
  createEventDetailsError: null,
  eventDetailsData: null,
  eventDetailsLoading: false,
  eventDetailsError: null,
  deleteEventDetailsData: null,
  deleteEventDetailsLoading: false,
  deleteEventDetailsError: null,
  updateOrderData: null,
  updateOrderLoading: false,
  updateOrderError: null,
  updateEventDetailData: null,
  updateEventDetailLoading: false,
  updateEventDetailError: null,
  deletePhotoGaleryData: null,
  deletePhotoGaleryLoading: false,
  deletePhotoGaleryError: null,
};

const eventDetailSlice = createSlice({
  name: "eventDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(updateEventDetail.rejected, (state, action) => {
        state.updateEventDetailError = action.error.message;
        state.updateEventDetailLoading = false;
      })
      .addCase(updateEventDetail.fulfilled, (state, action) => {
        state.updateEventDetailData = action.payload;
        state.updateEventDetailLoading = false;
      })
      .addCase(updateEventDetail.pending, (state) => {
        state.updateEventDetailLoading = true;
        state.updateEventDetailError = null;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.updateOrderError = action.error.message;
        state.updateOrderLoading = false;
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.updateOrderData = action.payload;
        state.updateOrderLoading = false;
      })
      .addCase(updateOrder.pending, (state) => {
        state.updateOrderLoading = true;
        state.updateOrderError = null;
      })
      .addCase(deleteEventDetails.rejected, (state, action) => {
        state.deleteEventDetailsError = action.error.message;
        state.deleteEventDetailsLoading = false;
      })
      .addCase(deleteEventDetails.fulfilled, (state, action) => {
        state.deleteEventDetailsData = action.payload;
        state.deleteEventDetailsLoading = false;
      })
      .addCase(deleteEventDetails.pending, (state) => {
        state.deleteEventDetailsLoading = true;
        state.deleteEventDetailsError = null;
      })
      .addCase(getEventDetails.rejected, (state, action) => {
        state.eventDetailsLoading = false;
        state.eventDetailsError = action.error.message;
      })
      .addCase(getEventDetails.fulfilled, (state, action) => {
        state.eventDetailsData = action.payload;
        state.eventDetailsLoading = false;
      })
      .addCase(getEventDetails.pending, (state) => {
        state.eventDetailsLoading = true;
        state.eventDetailsError = null;
      })
      .addCase(createEventDetails.rejected, (state, action) => {
        state.createEventDetailsLoading = false;
        state.createEventDetailsError = action.error.message;
      })
      .addCase(createEventDetails.fulfilled, (state, action) => {
        state.createEventDetailsData = action.payload;
        state.createEventDetailsLoading = false;
      })
      .addCase(createEventDetails.pending, (state) => {
        state.createEventDetailsLoading = true;
        state.createEventDetailsError = null;
      })
      .addCase(updateEventBanner.rejected, (state, action) => {
        state.updateBannerLoading = false;
        state.updateBannerError = action.error.message;
      })
      .addCase(updateEventBanner.fulfilled, (state, action) => {
        state.updateBannerData = action.payload;
        state.updateBannerLoading = false;
      })
      .addCase(updateEventBanner.pending, (state) => {
        state.updateBannerLoading = true;
        state.updateBannerError = null;
      })
      .addCase(getEventBanner.rejected, (state, action) => {
        state.getBannerError = action.error.message;
        state.getBannerLoading = false;
      })
      .addCase(getEventBanner.fulfilled, (state, action) => {
        state.getBannerData = action.payload;
        state.getBannerLoading = false;
      })
      .addCase(getEventBanner.pending, (state) => {
        state.getBannerLoading = true;
        state.getBannerError = null;
      })
      .addCase(createEventBanner.rejected, (state, action) => {
        state.createBannerDetailLoading = false;
        state.createBannerDetailError = action.error.message;
      })
      .addCase(createEventBanner.fulfilled, (state, action) => {
        state.createBannerDetailData = action.payload;
        state.createBannerDetailLoading = false;
      })
      .addCase(createEventBanner.pending, (state) => {
        state.createBannerDetailLoading = true;
        state.createBannerDetailError = null;
      });
  },
});

export default eventDetailSlice.reducer;

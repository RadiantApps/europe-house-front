import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const getCampaigns = createAsyncThunk("campaigns/getCampaigns", async (params) => {
  const response = await axiosInstance.get("/campaign", { params });
  return response.data;
});

const initialState = {
  campaignsData: null,
  totalCampaigns: 0,
  campaignsLoading: false,
  campaignsError: null,
};

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    clearCampaigns: (state) => {
      state.campaignsData = null;
      state.totalCampaigns = 0;
      state.campaignsError = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCampaigns.pending, (state, action) => {
      state.campaignsLoading = true;
      state.campaignsError = null;
      const offset = action.meta.arg.offset || 0;
      if (offset === 0) {
        state.campaignsData = [];
      }
    })
    .addCase(getCampaigns.fulfilled, (state, action) => {
      state.campaignsLoading = false;
      const offset = action.meta.arg.offset || 0;
      if (offset === 0) {
        state.campaignsData = action.payload.campaigns;
      } else {
        state.campaignsData = [...(state.campaignsData || []), ...action.payload.campaigns];
      }
      state.totalCampaigns = action.payload.total;
    })
    .addCase(getCampaigns.rejected, (state, action) => {
      state.campaignsLoading = false;
      state.campaignsError = action.error.message;
    });
  },
});

export default campaignsSlice.reducer;
export const { clearCampaigns } = campaignsSlice.actions; 
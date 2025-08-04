import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const getEvents = createAsyncThunk("events/getEvents", async (params) => {
  const response = await axiosInstance.get("/event", { params });
  return response.data;
});


const initialState = {
  eventsData: null,
  totalEvents: 0,
  eventsLoading: false,
  eventsError: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    clearEvents: (state) => {
      state.eventsData = null;
      state.totalEvents = 0;
      state.eventsError = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getEvents.pending, (state, action) => {
      state.eventsLoading = true;
      state.eventsError = null;
      const offset = action.meta.arg.offset || 0;
      if (offset === 0) {
        state.eventsData = [];
      }
    })
    .addCase(getEvents.fulfilled, (state, action) => {
      state.eventsLoading = false;
      const offset = action.meta.arg.offset || 0;
      if (offset === 0) {
        state.eventsData = action.payload.events;
      } else {
        state.eventsData = [...(state.eventsData || []), ...action.payload.events];
      }
      state.totalEvents = action.payload.total;
    })
    .addCase(getEvents.rejected, (state, action) => {
      state.eventsLoading = false;
      state.eventsError = action.error.message;
    });

  },
});

export default eventsSlice.reducer;
export const { clearEvents } = eventsSlice.actions;

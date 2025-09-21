import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/event");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Fail to get event"
      );
    }
  }
);

export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/event", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Event failed to create"
      );
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id) => {
    try {
      const response = await axiosInstance.delete(`/event/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "File to delete events"
      );
    }
  }
);

export const updateEvent = createAsyncThunk(
  "events/updateEvent",
  async (data, rejectWithValue) => {
    try {
      const response = await axiosInstance.put(`/event`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "File to delete events"
      );
    }
  }
);
const initialState = {
  getAllEventData: null,
  getAllEventLoading: false,
  getAllEventError: null,

  createEventData: null,
  createEventLoading: false,
  createEventError: null,

  deleteEventData: null,
  deleteEventLoading: false,
  deleteEventError: null,

  updateEventData: null,
  updateEventLoading: false,
  updateEventError: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateEvent.rejected, (state, action) => {
        state.updateEventLoading = false;
        state.updateEventError = action.error.message;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.updateEventData = action.payload;
        state.updateEventLoading = false;
      })
      .addCase(updateEvent.pending, (state) => {
        state.updateEventLoading = true;
        state.updateEventError = null;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.deleteEventError = action.error.message;
        state.deleteEventLoading = false;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.deleteEventData = action.payload;
        state.deleteEventLoading = false;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.deleteEventLoading = true;
        state.deleteEventError = null;
      })

      .addCase(getEvents.rejected, (state, action) => {
        state.getAllEventLoading = false;
        state.getAllEventError = action.error.message;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.getAllEventData = action.payload;
        state.getAllEventLoading = false;
      })
      .addCase(getEvents.pending, (state) => {
        state.getAllEventLoading = true;
        state.getAllEventError = null;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.createEventLoading = false;
        state.createEventError = action.error.message;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.createEventData = action.payload;
        state.createEventLoading = false;
      })
      .addCase(createEvent.pending, (state) => {
        state.createEventLoading = true;
        state.createEventError = null;
      });
  },
});

export default eventsSlice.reducer;
export const { clearEvents } = eventsSlice.actions;

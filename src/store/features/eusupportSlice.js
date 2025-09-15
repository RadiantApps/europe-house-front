import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getAllEuSupport = createAsyncThunk(
  "eusupport/getAllEuSupport",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/eusupport/getAllEuSupports");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Eusupport getting failed"
      );
    }
  }
);

export const createEuSupport = createAsyncThunk(
  "eusupport/createEuSupport",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/eusupport/createEuSupport",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Eu support creating failed"
      );
    }
  }
);

export const deleteEuSupport = createAsyncThunk(
  "eusupport/deleteEusupport",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/eusupport/deleteEuSupport/${id}`
      );
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Eu support creating failed"
      );
    }
  }
);

export const updateEuSupport = createAsyncThunk(
  "eusupport/updateEusupport",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        "/eusupport/updateEuSupport",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Eu support creating failed"
      );
    }
  }
);

const initialState = {
  euSupportData: null,
  euSupportLoading: false,
  euSupportError: null,
  createEuSupportData: null,
  createEuSupportLoading: false,
  createEuSupportError: null,
  deleteEuSupportData: null,
  deleteEuSupportLoading: false,
  deleteEuSupportError: null,
  updateSupportData: null,
  updateEuSupportLoading: false,
  updateEuSupportError: null,
};

const eusupportSlice = createSlice({
  name: "eusupport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllEuSupport.rejected, (state, action) => {
        state.euSupportError = action.error.message;
        state.euSupportLoading = false;
      })
      .addCase(getAllEuSupport.fulfilled, (state, action) => {
        state.euSupportData = action.payload;
        state.euSupportLoading = false;
      })
      .addCase(getAllEuSupport.pending, (state) => {
        state.euSupportLoading = true;
        state.euSupportError = null;
      })
      .addCase(createEuSupport.rejected, (state, action) => {
        state.createEuSupportError = action.error.message;
        state.createEuSupportLoading = false;
      })
      .addCase(createEuSupport.fulfilled, (state, action) => {
        state.createEuSupportData = action.payload;
        state.createEuSupportLoading = false;
      })
      .addCase(createEuSupport.pending, (state) => {
        state.createEuSupportLoading = true;
        state.createEuSupportError = null;
      })
      .addCase(deleteEuSupport.rejected, (state, action) => {
        state.deleteEuSupportError = action.error.message;
        state.deleteEuSupportLoading = false;
      })
      .addCase(deleteEuSupport.fulfilled, (state, action) => {
        state.deleteEuSupportData = action.payload;
        state.deleteEuSupportLoading = false;
      })
      .addCase(deleteEuSupport.pending, (state) => {
        state.deleteEuSupportLoading = true;
        state.deleteEuSupportError = null;
      })
      .addCase(updateEuSupport.rejected, (state, action) => {
        state.updateEuSupportError = action.error.message;
        state.updateEuSupportLoading = false;
      })
      .addCase(updateEuSupport.fulfilled, (state, action) => {
        state.updateSupportData = action.payload;
        state.updateEuSupportLoading = false;
      })
      .addCase(updateEuSupport.pending, (state) => {
        state.updateEuSupportLoading = true;
        state.updateEuSupportError = null;
      });
  },
});

export default eusupportSlice.reducer;

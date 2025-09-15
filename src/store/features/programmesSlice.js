import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const getProgrammes = createAsyncThunk(
  "programmes/getAllProgrammes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/programmes/getAllProgrammes");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Programmes getting failed"
      );
    }
  }
);

export const createProgrammes = createAsyncThunk(
  "programmes/createProgrammes",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/programmes/createProgramme",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Programmes creating failed"
      );
    }
  }
);

export const deleteProgrammes = createAsyncThunk(
  "programmes/deleteProgrammes",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/programmes/deleteProgramme/${id}`
      );
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Deleting programmes failed"
      );
    }
  }
);

export const updateProgramme = createAsyncThunk(
  "programmes/updateProgramme",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/programmes/updateProgramme`,
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Programmes updating failed"
      );
    }
  }
);

const initialState = {
  programmeData: [],
  programmeLoading: false,
  programmeError: null,
  createProgrammeData: null,
  createProgrammeLoading: false,
  createProgrammeError: null,
  deleteProgrammeData: null,
  deleteProgrammeLoading: false,
  deleteProgrammeError: null,
  updateProgrammeData: null,
  updateProgrammeLoading: false,
  updateProgrammeError: null,
};

const programmesSlice = createSlice({
  name: "programmes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Programmes
    builder
      .addCase(updateProgramme.pending, (state) => {
        state.updateProgrammeLoading = true;
        state.updateProgrammeError = null;
      })
      .addCase(updateProgramme.fulfilled, (state, action) => {
        state.updateProgrammeLoading = false;
        state.updateProgrammeData = action.payload;
      })
      .addCase(updateProgramme.rejected, (state, action) => {
        state.updateProgrammeLoading = false;
        state.updateProgrammeError = action.payload;
      })
      .addCase(getProgrammes.pending, (state) => {
        state.programmeLoading = true;
        state.programmeError = null;
      })
      .addCase(getProgrammes.fulfilled, (state, action) => {
        state.programmeLoading = false;
        state.programmeData = action.payload;
      })
      .addCase(getProgrammes.rejected, (state, action) => {
        state.programmeLoading = false;
        state.programmeError = action.payload;
      })
      // Create Programmes
      .addCase(createProgrammes.pending, (state) => {
        state.createProgrammeLoading = true;
        state.createProgrammeError = null;
      })
      .addCase(createProgrammes.fulfilled, (state, action) => {
        state.createProgrammeLoading = false;
        state.createProgrammeData = action.payload;
      })
      .addCase(createProgrammes.rejected, (state, action) => {
        state.createProgrammeLoading = false;
        state.createProgrammeError = action.payload;
      })
      // Delete Programmes
      .addCase(deleteProgrammes.pending, (state) => {
        state.deleteProgrammeLoading = true;
        state.deleteProgrammeError = null;
      })
      .addCase(deleteProgrammes.fulfilled, (state, action) => {
        state.deleteProgrammeLoading = false;
        state.deleteProgrammeData = action.payload;
      })
      .addCase(deleteProgrammes.rejected, (state, action) => {
        state.deleteProgrammeLoading = false;
        state.deleteProgrammeError = action.payload;
      });
  },
});

export default programmesSlice.reducer;

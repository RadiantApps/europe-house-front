import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

// Async thunk for creating publication
export const createPublication = createAsyncThunk(
  "publication/createPublication",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/publication", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Blog creating failed"
      );
    }
  }
);

// Async thunk for getting all publications
export const getPublication = createAsyncThunk(
  "publication/getPublication",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/publication");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Publication fetching failed"
      );
    }
  }
);

// Async thunk for deleting a publication
export const deletePublication = createAsyncThunk(
  "publication/deletePublication",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/publication/${id}`);
      return { id, ...response.data };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Publication deleting failed"
      );
    }
  }
);

export const updatePublication = createAsyncThunk(
  "publication/updatePublication",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/publication", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Publication updated failed"
      );
    }
  }
);

const initialState = {
  createPublicationData: null,
  createPublicationLoading: false,
  createPublicationError: null,

  publicationList: [],
  getPublicationLoading: false,
  getPublicationError: null,

  deletePublicationData: null,
  deletePublicationLoading: false,
  deletePublicationError: null,

  updatePublicationData: null,
  updatePublicationLoading: false,
  updatePublicationError: null,
};

const publicationSlice = createSlice({
  name: "publication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePublication.rejected, (state, action) => {
        state.updatePublicationLoading = false;
        state.updatePublicationError = action.error.message;
      })
      .addCase(updatePublication.fulfilled, (state, action) => {
        state.updatePublicationData = action.payload;
        state.updatePublicationLoading = false;
      })
      .addCase(updatePublication.pending, (state) => {
        state.updatePublicationLoading = true;
        state.updatePublicationError = null;
      })
      .addCase(createPublication.pending, (state) => {
        state.createPublicationLoading = true;
        state.createPublicationError = null;
      })
      .addCase(createPublication.fulfilled, (state, action) => {
        state.createPublicationLoading = false;
        state.createPublicationData = action.payload;
      })
      .addCase(createPublication.rejected, (state, action) => {
        state.createPublicationLoading = false;
        state.createPublicationError = action.payload;
      })

      // GET
      .addCase(getPublication.pending, (state) => {
        state.getPublicationLoading = true;
        state.getPublicationError = null;
      })
      .addCase(getPublication.fulfilled, (state, action) => {
        state.getPublicationLoading = false;
        state.publicationList = action.payload;
      })
      .addCase(getPublication.rejected, (state, action) => {
        state.getPublicationLoading = false;
        state.getPublicationError = action.payload;
      })

      // DELETE
      .addCase(deletePublication.pending, (state) => {
        state.deletePublicationLoading = true;
        state.deletePublicationError = null;
      })
      .addCase(deletePublication.fulfilled, (state, action) => {
        state.deletePublicationLoading = false;
        state.deletePublicationData = action.payload;
      })
      .addCase(deletePublication.rejected, (state, action) => {
        state.deletePublicationLoading = false;
        state.deletePublicationError = action.payload;
      });
  },
});

export default publicationSlice.reducer;

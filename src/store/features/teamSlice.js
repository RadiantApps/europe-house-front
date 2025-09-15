import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";

export const createTeam = createAsyncThunk("team/createTeam", async (data) => {
  try {
    const response = await axiosInstance.post("/teams/createTeams", data);
    return response.data;
  } catch (error) {
    throw new Error(
      JSON.stringify(error.response?.data || "Team member creation failed")
    );
  }
});

export const getAllTeams = createAsyncThunk("team/getAllTeams", async () => {
  try {
    const response = await axiosInstance.get("/teams/getAllTeamsMember");
    return response.data;
  } catch (error) {
    throw new Error(
      JSON.stringify(error.response?.data || "Fetching teams failed")
    );
  }
});

export const deleteTeams = createAsyncThunk("team/deleteTeams", async (id) => {
  try {
    const response = await axiosInstance.delete(`/teams/deleteTeam/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      JSON.stringify(error.response?.data || "Deleting team failed")
    );
  }
});

export const updatePositionTeam = createAsyncThunk(
  "team/updatePositionTeam",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        `/teams/updateTeamPosition`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(
        JSON.stringify(error.response?.data || "Updating position failed")
      );
    }
  }
);

export const updateSocialTeam = createAsyncThunk(
  "team/updateSocialTeam",
  async (data) => {
    try {
      const response = await axiosInstance.put(
        `/teams/updateTeamSocials`,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(
        JSON.stringify(error.response?.data || "Updating socials failed")
      );
    }
  }
);

export const updateTeamInfo = createAsyncThunk(
  "team/updateTeamInfo",
  async (data) => {
    try {
      const response = await axiosInstance.put(`/teams/updateTeamInfo`, data);
      return response.data;
    } catch (error) {
      throw new Error(
        JSON.stringify(error.response?.data || "Updating team info failed")
      );
    }
  }
);

const initialState = {
  updateTeamInfoData: null,
  updateTeamInfoLoading: false,
  updateTeamInfoError: null,
  createTeamData: null,
  createTeamLoading: false,
  createTeamError: null,
  allTeamsData: null,
  allTeamsLoading: false,
  allTeamsError: null,
  deleteTeamData: null,
  deleteTeamLoading: false,
  deleteTeamError: null,
  updatePositionTeamData: null,
  updatePositionTeamLoading: false,
  updatePositionTeamError: null,
  updateSocialTeamData: null,
  updateSocialTeamLoading: false,
  updateSocialTeamError: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateTeamInfo.pending, (state) => {
        state.updateTeamInfoLoading = true;
        state.updateTeamInfoError = null;
      })
      .addCase(updateTeamInfo.fulfilled, (state, action) => {
        state.updateTeamInfoLoading = false;
        state.updateTeamInfoData = action.payload;
      })
      .addCase(updateTeamInfo.rejected, (state, action) => {
        state.updateTeamInfoLoading = false;
        state.updateTeamInfoError = action.error.message;
      })
      .addCase(updateSocialTeam.pending, (state) => {
        state.updateSocialTeamLoading = true;
        state.updateSocialTeamError = null;
      })
      .addCase(updateSocialTeam.fulfilled, (state, action) => {
        state.updateSocialTeamLoading = false;
        state.updateSocialTeamData = action.payload;
      })
      .addCase(updateSocialTeam.rejected, (state, action) => {
        state.updateSocialTeamLoading = false;
        state.updateSocialTeamError = action.error.message;
      })
      .addCase(updatePositionTeam.pending, (state) => {
        state.updatePositionTeamLoading = true;
        state.updatePositionTeamError = null;
      })
      .addCase(updatePositionTeam.fulfilled, (state, action) => {
        state.updatePositionTeamLoading = false;
        state.updatePositionTeamData = action.payload;
      })
      .addCase(updatePositionTeam.rejected, (state, action) => {
        state.updatePositionTeamLoading = false;
        state.updatePositionTeamError = action.error.message;
      })
      .addCase(deleteTeams.pending, (state) => {
        state.deleteTeamLoading = true;
        state.deleteTeamError = null;
      })
      .addCase(deleteTeams.fulfilled, (state, action) => {
        state.deleteTeamLoading = false;
        state.deleteTeamData = action.payload;
      })
      .addCase(deleteTeams.rejected, (state, action) => {
        state.deleteTeamLoading = false;
        state.deleteTeamError = action.error.message;
      })
      .addCase(createTeam.pending, (state) => {
        state.createTeamLoading = true;
        state.createTeamError = null;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.createTeamLoading = false;
        state.createTeamData = action.payload;
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.createTeamLoading = false;
        state.createTeamError = action.error.message;
      })
      .addCase(getAllTeams.pending, (state) => {
        state.allTeamsLoading = true;
        state.allTeamsError = null;
      })
      .addCase(getAllTeams.fulfilled, (state, action) => {
        state.allTeamsLoading = false;
        state.allTeamsData = action.payload;
      })
      .addCase(getAllTeams.rejected, (state, action) => {
        state.allTeamsLoading = false;
        state.allTeamsError = action.error.message;
      });
  },
});

export default teamSlice.reducer;

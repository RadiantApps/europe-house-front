import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/api/axiosInstance";
import { jwtDecode } from "jwt-decode";

// --- Async Thunks ---
export const loginUser = createAsyncThunk("user/login", async (data) => {
  try {
    const response = await axiosInstance.post("/user/login", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
});

export const createUser = createAsyncThunk("user/createUser", async (data) => {
  try {
    const response = await axiosInstance.post("/user", data);
    return response.data;
  } catch (error) {
    throw new Error(
      JSON.stringify(error.response?.data || "User creation failed")
    );
  }
});

export const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const response = await axiosInstance.get("/user");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Fetching user failed");
  }
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    const response = await axiosInstance.delete(`/user/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Deleting user failed");
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.put(`/user/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Updating user failed");
    }
  }
);

const initialState = {
  userLoginData: null,
  userLoginLoading: false,
  userLoginError: null,

  usersData: null,
  usersLoading: false,
  usersError: null,

  createUserData: null,
  createUserLoading: false,
  createUserError: null,

  deleteUserData: null,
  deleteUserLoading: false,
  deleteUserError: null,

  updateUserData: null,
  updateUserLoading: false,
  updateUserError: null,
};

// --- Slice ---
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userLoginData = action.payload || null;
    },
    logout: (state) => {
      state.userLoginData = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // -- update user ---

      .addCase(updateUser.rejected, (state, action) => {
        state.updateUserLoading = false;
        state.updateUserError = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.updateUserData = action.payload;
        state.updateUserLoading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.updateUserLoading = true;
        state.updateUserError = null;
      })

      // --- delete user ---

      .addCase(deleteUser.rejected, (state, action) => {
        state.deleteUserLoading = false;
        state.deleteUserError = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.deleteUserData = action.payload;
        state.deleteUserLoading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.deleteUserLoading = true;
        state.deleteUserError = null;
      })

      // --- Login ---
      .addCase(loginUser.pending, (state) => {
        state.userLoginLoading = true;
        state.userLoginError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const token = action.payload.token;
        if (token) {
          if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
          }
          state.userLoginData = jwtDecode(token);
        }
        state.userLoginLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.userLoginError = action.error.message;
        state.userLoginLoading = false;
      })

      // --- Create User ---
      .addCase(createUser.pending, (state) => {
        state.createUserLoading = true;
        state.createUserError = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUserData = action.payload;
        state.createUserLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUserError = action.error.message;
        state.createUserLoading = false;
      })

      // --- Get Users ---
      .addCase(getUser.pending, (state) => {
        state.usersLoading = true;
        state.usersError = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.usersData = action.payload;
        state.usersLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.usersError = action.error.message;
        state.usersLoading = false;
      });
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;

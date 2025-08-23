import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isToggle: true,
  },
  reducers: {
    setToggle: (state) => {
      state.isToggle = !state.isToggle;
    },
    setToggleManual: (state, action) => {
      state.isToggle = action.payload;
    },
  },
});

export const { setToggle, setToggleManual } = toggleSlice.actions;
export default toggleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLanguage: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions; 
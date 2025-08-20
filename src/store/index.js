import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./features/eventsSlice";
import languageSlice from "./features/languageSlice";
import campaignsSlice from "./features/campaignsSlice";

export const store = configureStore({
  reducer: {
   events: eventsSlice,
   language: languageSlice,
   campaigns: campaignsSlice
  },
});

import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./features/eventsSlice";

export const store = configureStore({
  reducer: {
   events:eventsSlice
  },
});

import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./features/eventsSlice";
import languageSlice from "./features/languageSlice";
import campaignsSlice from "./features/campaignsSlice";
import toggleSlice from "./features/toggleSlice";
import userSlice from "./features/userSlice";
import blogSlice from "./features/blogSlice";
import blogCategorySlice from "./features/blogCategorySlice";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    language: languageSlice,
    campaigns: campaignsSlice,
    toggle: toggleSlice,
    user: userSlice,
    blog: blogSlice,
    blogCategory: blogCategorySlice,
  },
});

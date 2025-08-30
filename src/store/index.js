import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./features/eventsSlice";
import languageSlice from "./features/languageSlice";
import toggleSlice from "./features/toggleSlice";
import userSlice from "./features/userSlice";
import blogSlice from "./features/blogSlice";
import blogCategorySlice from "./features/blogCategorySlice";
import categoryPublicationSlice from "./features/categoryPublicationSlice";
import publicationSlice from "./features/publicationSlice";
import campaingsSlice from "./features/campaingsSlice";

export const store = configureStore({
  reducer: {
    events: eventsSlice,
    language: languageSlice,
    toggle: toggleSlice,
    user: userSlice,
    blog: blogSlice,
    blogCategory: blogCategorySlice,
    categoryPublication: categoryPublicationSlice,
    publication: publicationSlice,
    campaing: campaingsSlice,
  },
});

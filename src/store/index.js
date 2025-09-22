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
import categoryEventSlice from "./features/categoryEventSlice";
import locationSlice from "./features/locationSlice";
import teamSlice from "./features/teamSlice";
import programmesSlice from "./features/programmesSlice";
import eusupportSlice from "./features/eusupportSlice";

import { publicationApi } from "./services/publicationApi";
import { aboutApi } from "./services/aboutApi";
import { eventApi } from "./services/eventApi";
import { campaingsApi } from "./services/campaingsApi";
import { blogApi } from "./services/blogApi";
import { homeApi } from "./services/homeApi";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    language: languageSlice,
    team: teamSlice,
    toggle: toggleSlice,
    user: userSlice,
    blog: blogSlice,
    blogCategory: blogCategorySlice,
    categoryPublication: categoryPublicationSlice,
    publication: publicationSlice,
    campaing: campaingsSlice,
    categoryevent: categoryEventSlice,
    location: locationSlice,
    programme: programmesSlice,
    eusupport: eusupportSlice,
    [publicationApi.reducerPath]: publicationApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [campaingsApi.reducerPath]: campaingsApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(publicationApi.middleware)
      .concat(aboutApi.middleware)
      .concat(eventApi.middleware)
      .concat(campaingsApi.middleware)
      .concat(blogApi.middleware)
      .concat(homeApi.middleware),
});

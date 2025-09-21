import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEventApi: builder.query({
      query: ({ year, month, location, category }) => {
        let params = new URLSearchParams();
        if (year) params.append("year", year);
        if (month) params.append("month", month);
        if (location) params.append("location", location);
        if (category) params.append("category", category);

        return `/event/getAllEvent?${params.toString()}`;
      },
    }),
    getEventItem: builder.query({
      query: ({ id }) => `/event/getItemEvent/${id}`,
    }),
    getUpcomingEvent: builder.query({
      query: () => `/event/getUpcomingEvent`,
    }),
  }),
});

export const {
  useGetEventApiQuery,
  useGetEventItemQuery,
  useGetUpcomingEventQuery,
} = eventApi;

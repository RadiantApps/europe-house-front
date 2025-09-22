import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLatestEu: builder.query({
      query: () => `/home/getLatestEu`,
    }),
    getLatestNews: builder.query({
      query: () => "/home/getLatestNews",
    }),
    getLatestCampaings: builder.query({
      query: () => "/home/getLatestCampaings",
    }),
    getLatestPublication: builder.query({
      query: () => `/home/getLatestPublication`,
    }),
  }),
});

export const {
  useGetLatestEuQuery,
  useGetLatestNewsQuery,
  useGetLatestCampaingsQuery,
  useGetLatestPublicationQuery,
} = homeApi;

import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: () => `/teams/getAllTeamsMember`,
    }),
  }),
});

export const { useGetTeamQuery } = aboutApi;

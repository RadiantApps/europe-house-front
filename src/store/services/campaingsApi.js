import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const campaingsApi = createApi({
  reducerPath: "campaingsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCampaingsApi: builder.query({
      query: () => `/campaings/getCampaings`,
    }),
  }),
});

export const { useGetCampaingsApiQuery } = campaingsApi;

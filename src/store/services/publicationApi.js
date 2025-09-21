import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicationApi = createApi({
  reducerPath: "publicationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPublicationApi: builder.query({
      query: ({ year, topic, language }) => {
        let params = new URLSearchParams();
        if (year) params.append("year", year);
        if (topic) params.append("category", topic);
        if (language) params.append("language", language);
        return `/publication/getPublication?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetPublicationApiQuery } = publicationApi;

import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
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
    getBlogs: builder.query({
      query: ({ year, month, category }) => {
        let params = new URLSearchParams();
        if (year) params.append("year", year);
        if (month) params.append("month", month);
        if (category) params.append("category", category);
        return `/blog/getBlogsApi?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;

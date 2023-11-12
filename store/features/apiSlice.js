import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wowtalent.live/wp-json/wp/v2/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => "posts",
    }),
    getPost: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetAllPostQuery, useGetPostQuery } = postApi;

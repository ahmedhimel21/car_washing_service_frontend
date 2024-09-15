import { baseApi } from "../../api/baseApi";

const reviewEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "/api/review",
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery } = reviewEndpoints;

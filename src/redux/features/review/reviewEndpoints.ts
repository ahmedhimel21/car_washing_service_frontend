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
    addReview: builder.mutation({
      query: (payload) => ({
        url: "/api/review",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewMutation } = reviewEndpoints;

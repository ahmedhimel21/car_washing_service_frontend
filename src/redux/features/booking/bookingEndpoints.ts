import { baseApi } from "../../api/baseApi";

const bookingEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (args) => {
        return {
          url: "/api/bookings",
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["booking"],
    }),
    getAllBooking: builder.query({
      query: () => {
        return {
          url: "/api/bookings",
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
    getUserBooking: builder.query({
      query: () => {
        return {
          url: "/api/my-bookings",
          method: "GET",
        };
      },
      providesTags: ["booking"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetAllBookingQuery,
  useGetUserBookingQuery,
} = bookingEndpoints;

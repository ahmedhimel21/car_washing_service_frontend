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
    }),
  }),
});

export const { useCreateBookingMutation } = bookingEndpoints;

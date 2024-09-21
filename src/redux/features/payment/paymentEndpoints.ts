import { baseApi } from "../../api/baseApi";

const paymentEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation({
      query: (args) => {
        return {
          url: "/api/payment",
          method: "POST",
          body: args,
        };
      },
    }),
  }),
});

export const { useMakePaymentMutation } = paymentEndpoints;

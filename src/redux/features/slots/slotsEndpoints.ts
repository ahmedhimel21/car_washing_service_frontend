import { baseApi } from "../../api/baseApi";

const slotsEndPoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailableSlots: builder.query({
      query: ({ date, id }) => {
        const params = new URLSearchParams();
        if (date) {
          params.append("date", date);
        }
        return {
          url: `/api/slots/availability/${id}`,
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAvailableSlotsQuery } = slotsEndPoints;

import { baseApi } from "../../api/baseApi";

const slotsEndPoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSlots: builder.mutation({
      query: (args) => {
        return {
          url: "/api/services/slots",
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["slots"],
    }),
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
      providesTags: ["slots"],
    }),
    getAllSlots: builder.query({
      query: () => {
        return {
          url: "/api/slots",
          method: "GET",
        };
      },
      providesTags: ["slots"],
    }),
    updateSlot: builder.mutation({
      query: (args) => {
        console.log(args);
        return {
          url: `/api/slots/update/${args?._id}`,
          method: "PUT",
          body: args?.updateData,
        };
      },
      invalidatesTags: ["slots"],
    }),
  }),
});

export const {
  useGetAvailableSlotsQuery,
  useGetAllSlotsQuery,
  useUpdateSlotMutation,
  useCreateSlotsMutation,
} = slotsEndPoints;

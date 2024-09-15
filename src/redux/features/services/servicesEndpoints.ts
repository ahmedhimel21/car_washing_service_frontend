import { baseApi } from "../../api/baseApi";

const servicesEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/api/services",
        method: "GET",
      }),
      providesTags: ["services"],
    }),
  }),
});

export const { useGetServicesQuery } = servicesEndpoints;

import { baseApi } from "../../api/baseApi";

const servicesEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: ({ searchTerm, minPrice, maxPrice, sort }) => {
        const params = new URLSearchParams();
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (minPrice) {
          params.append("minPrice", minPrice);
        }
        if (maxPrice) {
          params.append("maxPrice", maxPrice);
        }
        if (sort) {
          params.append("sort", sort.sort);
        }
        return {
          url: "/api/services",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["services"],
    }),
    getSingleService: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/api/services/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetServicesQuery, useGetSingleServiceQuery } =
  servicesEndpoints;

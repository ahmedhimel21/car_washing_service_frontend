import { baseApi } from "../../api/baseApi";

const servicesEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: ({ searchTerm, minPrice, maxPrice, sort }) => {
        console.log("inside api", sort);
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
  }),
});

export const { useGetServicesQuery } = servicesEndpoints;

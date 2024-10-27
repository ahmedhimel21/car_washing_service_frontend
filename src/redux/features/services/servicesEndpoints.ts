import { baseApi } from "../../api/baseApi";

const servicesEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (args) => {
        return {
          url: "/api/services",
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["services"],
    }),
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
        params.append("isDeleted", "false");
        return {
          url: "/api/services",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["services"],
    }),
    getServicesComparison: builder.query({
      query: () => {
        return {
          url: "/api/services",
          method: "GET",
        };
      },
      providesTags: ["services"],
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          url: `/api/services/${id}`,
          method: "GET",
        };
      },
    }),
    updateService: builder.mutation({
      query: (args) => {
        return {
          url: `/api/services/update/${args?._id}`,
          method: "PUT",
          body: args?.updateData,
        };
      },
      invalidatesTags: ["services"],
    }),
    deleteService: builder.mutation({
      query: (_id) => {
        return {
          url: `/api/services/${_id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["services"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useCreateServiceMutation,
  useGetServicesComparisonQuery,
} = servicesEndpoints;

import { baseApi } from "../../api/baseApi";

const userEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateUserRole: builder.mutation({
      query: (id) => {
        return {
          url: `/api/users/${id}`,
          method: "PUT",
        };
      },
      invalidatesTags: ["user"],
    }),
    updateUserProfile: builder.mutation({
      query: (args) => {
        return {
          url: `/api/users/update/${args?.id}`,
          method: "PUT",
          body: args?.updateData,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useUpdateUserProfileMutation,
} = userEndpoints;

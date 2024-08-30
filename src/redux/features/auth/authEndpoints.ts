import { baseApi } from "../../api/baseApi";

const authEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credential,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "api/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authEndpoints;

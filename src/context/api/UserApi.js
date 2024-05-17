import { api } from ".";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get request
    getUsers: build.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    postUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUserMutation, usePostUserMutation } =
 userApi;

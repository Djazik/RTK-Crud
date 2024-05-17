import { api } from ".";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    //Get request
    getProduct: build.query({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["User"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    postProduct: build.mutation({
      query: (body) => ({
        url: `/product`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetProductQuery, usePostProductMutation,useDeleteProductMutation } =
  productApi;

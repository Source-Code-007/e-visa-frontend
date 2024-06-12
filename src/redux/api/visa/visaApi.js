import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const visa = createApi({
  reducerPath: "visa",
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_REACT_APP_ROOT}),

  endpoints: (builder) => ({
    createVisa: builder.mutation({
      query: (visaData) => {
        return {
          url: `/visa`,
          method: "POST",
          body: visaData,
        };
      },
    }),

    getAllVisa: builder.query({
      query: () => "/visa",
    }),

    getSingleVisa: builder.query({
      query: (id) => `/visa/${id}`,
    }),

  }),
});


export const {
  useGetAllVisaQuery,
  useGetSingleVisaQuery,
  useCreateVisaMutation
} = visa;

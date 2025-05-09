import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rimac-front-end-challenge.netlify.app/api' }),
  endpoints: (builder) => ({
    getPlans: builder.query({
      query: () => '/plans.json',
    }),
    /* getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }), */
  }),
});

export const { useGetPlansQuery } = apiSlice;
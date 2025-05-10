import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rimac-front-end-challenge.netlify.app/api' }),
  endpoints: (builder) => ({
    getPlans: builder.query({
      query: () => '/plans.json',
    }),
    getUser: builder.query({
      query: (id) => `/user.json`,
    }), 
  }),
});

export const { useGetPlansQuery, useGetUserQuery } = apiSlice;
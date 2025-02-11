import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    // By default, add api-key for every request

    return headers.set("x-cg-demo-api-key", import.meta.env.VITE_DEMO_API_KEY);
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const baseApi = createApi({
  baseQuery: baseQueryWithRetry,
  reducerPath: "coinGeckoApi",
  tagTypes: ["Coins", "Categories"],
  endpoints: () => ({}),
});

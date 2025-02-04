import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.coingecko.com/api/v3/",
  //   prepareHeaders: (headers) => {
  //     // By default, add api-key for every request
  //     const apiKey = process.env.REACT_APP_API_URL;
  //     if (apiKey) {
  //       headers.set("x-cg-demo-api-key", apiKey);
  //     }
  //     return headers;
  //   },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const baseApi = createApi({
  baseQuery: baseQueryWithRetry,

  tagTypes: ["Coins", "Categories"],
  endpoints: () => ({}),
});

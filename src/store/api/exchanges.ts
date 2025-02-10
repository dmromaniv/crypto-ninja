import { baseApi } from "./api";

import type { Exchange, ExchangeQueryParams } from "@/types/exchange";

export const exchangesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getExchanges: build.query<Exchange[], ExchangeQueryParams>({
      query: (params) => {
        return { url: `exchanges`, params: { page: params?.page, per_page: params?.perPage } };
      },
      transformResponse: (response: Exchange[]) => {
        return response.map((exchange) => ({
          id: exchange.id,
          name: exchange.name,
          year_established: exchange.year_established,
          country: exchange.country,
          description: exchange.description,
          url: exchange.url,
          image: exchange.image,
          trust_score: exchange.trust_score,
          trust_score_rank: exchange.trust_score_rank,
          trade_volume_24h_btc: exchange.trade_volume_24h_btc,
          trade_volume_24h_btc_normalized: exchange.trade_volume_24h_btc_normalized,
        }));
      },
    }),
  }),
});

export const { useGetExchangesQuery } = exchangesApi;

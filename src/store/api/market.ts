import { GlobalMarket } from "@/types/market";
import { baseApi } from "./api";

export const marketApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getGlobalMarketData: build.query<GlobalMarket, void>({
      query: () => {
        return `global`;
      },
      transformResponse: (response: { data: GlobalMarket }) => {
        return {
          active_cryptocurrencies: response.data.active_cryptocurrencies,
          markets: response.data.markets,
          total_market_cap: response.data.total_market_cap,
          total_volume: response.data.total_volume,
          market_cap_percentage: response.data.market_cap_percentage,
          market_cap_change_percentage_24h_usd: response.data.market_cap_change_percentage_24h_usd,
        };
      },
    }),
  }),
});

export const { useGetGlobalMarketDataQuery } = marketApi;

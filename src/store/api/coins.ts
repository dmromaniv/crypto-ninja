import { defaultCoinsQueryParams } from "@/config/apiConfig";
import { baseApi } from "./api";

import type { Coin, CoinCategory, CoinQueryParams, SearchedCoin, TrendingData } from "@/types/coin";

export const coinsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCoins: build.query<Coin[], CoinQueryParams>({
      query: (params) => {
        const queryParams = {
          vs_currency: params.currency,
          category: params?.category,
          order: params?.order,
          page: params?.page,
          per_page: params?.perPage,
        };

        return { url: `coins/markets`, params: { ...queryParams, ...defaultCoinsQueryParams } };
      },
      transformResponse: (response: Coin[]) => {
        return response.map((coin) => ({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          current_price: coin.current_price,
          image: coin.image,
          market_cap: coin.market_cap,
          market_cap_rank: coin.market_cap_rank,
          sparkline_in_7d: coin.sparkline_in_7d,
          price_change_percentage_7d_in_currency: coin.price_change_percentage_7d_in_currency,
          price_change_percentage_24h_in_currency: coin.price_change_percentage_24h_in_currency,
        }));
      },
    }),
    // getCoinById: build.query<Coin[], CoinQueryParams>({
    //   query: ({ vs_currency, order, per_page, page }) => {
    //     return `coins/markets?vs_currency=usd&per_page=50`;
    //   },
    // }),
    getTrendingCrypto: build.query<TrendingData, void>({
      query: () => {
        return `search/trending`;
      },
      transformResponse: (response: TrendingData) => {
        return {
          coins: response.coins.map(({ item: coin }) => {
            return {
              item: {
                id: coin.id,
                coin_id: coin.coin_id,
                name: coin.name,
                symbol: coin.symbol,
                thumb: coin.thumb,
                data: {
                  price: coin.data.price,
                  price_change_percentage_24h: coin.data.price_change_percentage_24h,
                },
              },
            };
          }),
          categories: response.categories.map((category) => {
            return {
              id: category.id,
              name: category.name,
              data: {
                market_cap: category.data.market_cap,
                market_cap_change_percentage_24h: category.data.market_cap_change_percentage_24h,
              },
            };
          }),
        };
      },
    }),
    getCategories: build.query<CoinCategory[], void>({
      query: () => {
        return `coins/categories/list`;
      },
    }),
    getDataViaSearch: build.query<SearchedCoin[], string>({
      query: (query) => {
        return `search?query=${query}`;
      },
      transformResponse: (response: { coins: SearchedCoin[] }) => {
        return response.coins;
      },
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCategoriesQuery,
  useGetTrendingCryptoQuery,
  useLazyGetDataViaSearchQuery,
} = coinsApi;

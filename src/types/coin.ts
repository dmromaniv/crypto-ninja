export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  sparkline_in_7d: Sparkline;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h_in_currency: number;
}

interface Sparkline {
  price: number[];
}

export interface CoinCategory {
  category_id: string;
  name: string;
}

export interface TrendingData {
  coins: TrendingCoin[];
  categories: TrendingCategory[];
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    symbol: string;
    name: string;
    thumb: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        [x: string]: number;
      };
    };
  };
}

export interface SearchedCoin {
  id: string;
  coin_id: number;
  symbol: string;
  market_cap_rank: number;
  name: string;
  thumb: string;
}

export interface TrendingCategory {
  id: string;
  name: string;
  data: {
    market_cap: number;
    market_cap_change_percentage_24h: {
      [x: string]: number;
    };
  };
}

// Types of query params
export interface CoinQueryParams {
  currency: string;
  order?: string;
  perPage?: number;
  page?: number;
  category?: string;
}
